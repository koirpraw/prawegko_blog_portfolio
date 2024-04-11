
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { vscDarkPlus, dracula, } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Button } from "@/components/ui/button";
import { getAllPublished, getSingleBlogPostBySlug } from "@/lib/notion.js";





const CodeBlock = ({ language, codestring }) => {


  return (
    <SyntaxHighlighter language={language} style={dracula} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  )
}

const Post = ({ post }) => {
  function GoBack() {
    window.history.back();
  }
  return (
    <>

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



      <main className="flex flex-col justify-center items-center space-y-6   min-h-screen lg:mx-48 mx-12 ">
        {/* <h1 style={{ textAlign: "center" }}>🌐 BLOG</h1> */}
        <h2 className="text-4xl my-12">{post.metadata.title}</h2>

        <section className="flex flex-col justify-center ">


          <div className="flex flex-row justify-around items-center space-y-6">
            <h5 >🗓️ {post.metadata.date}</h5>
            <h5>📖 time:&nbsp;{post.metadata.readTime}</h5>
            <p className="color-grey-600"> 🏷️ &nbsp; &nbsp;{post.metadata.tags.join(' | ')}</p>
          </div>

          <div className="flex flex-col mx-6 space-y-4" >
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <CodeBlock
                      codestring={String(children).replace(/\n$/, '')}
                      language={match[1]}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}>{post.markdown}</ReactMarkdown>

            <div className="flex justify-center text-gray-400">
              <p>This post was last updated on {post.metadata.date}</p>

            </div>
            {/* <Badge variant='outline' className='text-center'>❤️ 200</Badge> */}



          </div>


        </section>
        <Button onClick={
          () => GoBack()
        }>Back</Button>

      </main>
    </>

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

