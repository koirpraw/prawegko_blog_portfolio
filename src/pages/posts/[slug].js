
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Container } from "@/components/container"

import { vscDarkPlus, dracula, } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Button } from "@/components/ui/button";
import { getAllPublished, getSingleBlogPostBySlug } from "@/lib/notion.js";
import Link from 'next/link';
import Text from "@/components/notion_blocks/text";
// import hljs from 'highlight.js/lib/core'


const CodeBlock = ({ language, codestring }) => {

  return (
    <SyntaxHighlighter language={language} style={dracula} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  )
}

const Post = ({ post }) => {
  const colorClasses = {
    red: 'bg-red-200',
    yellow: 'bg-yellow-200',
    green: 'bg-green-200',
    // add more colors if needed
  };



  return (

    <div className="w-full lg:px-48">
      <Head>
        <title>{post.metadata.title}</title>
        <meta name="description" content={post.metadata.description} />
        <meta name="keywords" content={post.metadata.tags.join(',')} />
        <meta name="author" content="Praweg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={post.metadata.title} />
        <meta property="og:description" content={post.metadata.description} />
        <link rel="icon" href="/pkSite_favicon.png" />

      </Head>

      <div className="max-w-2xl min-w-full flex flex-col justify-evenly ">
        <article>




          <div className="flex flex-col justify-evenly space-y-6 shadow-xl rounded-xl lg:p-12 p-4 dark:shadow-lime-100">

            <div className="flex justify-center items-center">
              <h2 className="mb-4 font-bold text-3xl text-zinc-800 dark:text-zinc-100 ">
                {post.metadata.title}
              </h2>
            </div>

            <div className="flex lg:flex-row flex-col lg:justify-between  items-start lg:items-center py-4 px-2 lg:px-12  border-2 rounded-md">

              <a href="/" target="_blank"><p>Author: Praweg Koirala</p></a>
              <p >🗓️  {post.metadata.date}</p>
              <p>⌛️  {post.metadata.readTime} mins</p>
              <div className={` px-2  rounded-md text-sm font-medium ${colorClasses[post.metadata.phaseColor]}`} > {post.metadata.phase} </div>
              <p className="font-small"> 🏷️ &nbsp; &nbsp;{post.metadata.tags.join(' | ')}</p>
            </div>


            <ReactMarkdown
              components={{
                // code({ node, children, ...props }) {
                //   return <p className=" font-mono bg-red-200" {...props}>{children}</p>
                // },
                ol({ node, children, ...props }) {
                  return <div className="m-0 list-decimal"{...props}>{children}</div>
                },
                li({ node, children, ...props }) {
                  return <div className="m-0 list-disc"{...props}>{children}</div>
                },
                h1({ node, children, ...props }) {
                  return <div className="text-3xl font-medium"{...props}>{children}</div>
                },
                h2({ node, children, ...props }) {
                  return <div className="text-2xl font-medium"{...props}>{children}</div>
                },
                h3({ node, children, ...props }) {
                  return <div className="text-xl font-medium"{...props}>{children}</div>
                },
                table({ node, children, ...props }) {
                  return <div{...props}>{children}</div>
                },
                pre({ node, children, ...props }) {
                  return <div{...props}>{children}</div>
                },
                CodeBlock({ node, children, ...props }) {
                  return <div{...props}>{children}</div>
                },
                code({ node, inline, className, children, ...props }) {



                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <CodeBlock
                      codestring={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      className="text-sm font-mono"




                    />
                  ) : (
                    <code
                      className="text-green"
                      // dangerouslySetInnerHTML={{ __html: post.markdown }}
                      {...props}>

                      {children}
                    </code>
                  )
                },
              }}

            // dangerouslySetInnerHTML={{ __html: post.markdown }}
            // children={post.markdown}
            // className="prose"
            >
              {post.markdown}
            </ReactMarkdown>

            <div className="flex justify-center text-gray-400 space-x-2">
              <p>This post was last updated on:  {post.metadata.updatedDate === "" ? post.metadata.date : post.metadata.updatedDate}</p>
              {/* <p>This post was last updated on:  {updatedDate}</p> */}


            </div>
            {/* <Badge variant='outline' className='text-center'>❤️ 200</Badge> */}



          </div>

        </article>
        <div className="flex justify-center items-center pt-16">
          <Button asChild>
            <Link href="/blogPage">Back</Link>
          </Button>

        </div>




      </div>



      {/* 
      </div> */}
      {/* </Container> */}

    </div>



  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

// export const getStaticPaths = async()=>{
//     const posts = await getAllPublished();
//     const paths = posts.map((post)=>({
//         params: {
//             slug: post.slug,
//         },
//     }));
//     return {
//         paths,
//         fallback: false,
//     };
// }

export const getStaticPaths = async () => {
  const posts = await getAllPublished()
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;

