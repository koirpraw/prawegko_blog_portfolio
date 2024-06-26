const { Client } = require("@notionhq/client")
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });
    return allTags;
  };


  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select) ?? "NA",
    description: post.properties.Description.rich_text[0].plain_text ?? "NA",
    date: getToday(post.properties.Date.created_time),
    slug: post.properties.Slug.rich_text[0].plain_text ?? "NA",
    // words: page.properties['Words'].rich_text[0].plain_text,
    words: post.properties && post.properties.Words && post.properties.Words.rich_text
      ? post.properties.Words.rich_text[0].plain_text
      : "NA",
    readTime: post.properties && post.properties.ReadTime && post.properties.ReadTime.formula ? post.properties.ReadTime.formula.number : "",
    phase: post.properties && post.properties.Phase && post.properties.Phase.status
      ? post.properties.Phase.status.name
      : "",
    phaseColor: post.properties && post.properties.Phase && post.properties.Phase.status
      ? post.properties.Phase.status.color
      : "",


    updatedDate: post.properties && post.properties.updatedDate && post.properties.updatedDate.date ? getToday(post.properties.updatedDate.date.start) : ""
  };
}

function getToday(datestring) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  if (datestring) {
    date = new Date(datestring);
  }
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;
  return today;
};

const { NotionToMarkdown } = require("notion-to-md");
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPostBySlug = async (slug) => {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata,
    markdown: mdString,
  };
}

