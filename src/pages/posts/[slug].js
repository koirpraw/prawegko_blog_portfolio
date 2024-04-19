
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { vscDarkPlus, dracula, } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Button } from "@/components/ui/button";
import { getAllPublished, getSingleBlogPostBySlug } from "@/lib/notion.js";
import Link from 'next/link';



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



      <main className="flex flex-col justify-center items-center space-y-6 min-h-screen lg:mx-48 mx-6 ">

        <h2 className="text-2xl font-bold my-12">{post.metadata.title}</h2>

        <section className="flex flex-col justify-evenly space-y-6 shadow-lg rounded-lg p-12 dark:shadow-lime-100">


          <div className="flex flex-row justify-between items-center py-4 px-12 border-2 rounded-md">
            {/* <p >Author: Praweg Koirala</p> */}
            <a href="/" target="_blank"><p>Author: Praweg Koirala</p></a>
            <p >🗓️  {post.metadata.date}</p>
            <p>⌛️  {post.metadata.readTime} mins</p>
            <div className={` px-2  rounded-md text-sm font-medium ${colorClasses[post.metadata.phaseColor]}`} > {post.metadata.phase} </div>


            <p className="font-medium"> 🏷️ &nbsp; &nbsp;{post.metadata.tags.join(' | ')}</p>
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
                },
                h1({ node, children, ...props }) {
                  return <h1 className="text-bold text-3xl" {...props}>{children}</h1>
                },
                h2({ node, children, ...props }) {
                  return <h2 className="text-medium text-2xl" {...props}>{children}</h2>
                },
                h3({ node, children, ...props }) {
                  return <h2 className="font-medium text-xl" {...props}>{children}</h2>
                },
                p({ node, children, ...props }) {
                  return <p className="font-light text-lg"{...props}>{children}</p>
                },
                ol({ node, children, ...props }) {
                  return <div className="text-lg" {...props}>{children}</div>
                },
                script({ node, children, ...props }) {
                  return <p className="text-red-400 font-mono" {...props}>{children}</p>
                },
                col({ node, children, ...props }) {
                  return
                }

                // ul({ node, children, ...props }) {
                //   return <div className="text-lg" {...props}>{children}</div>
                // },
                // li({ node, children, ...props }) {
                //   return <div className="text-lg" {...props}>{children}</div>
                // }

              }} >{post.markdown}</ReactMarkdown>

            <div className="flex justify-center text-gray-400 space-x-2">
              <p>This post was last updated on:  {post.metadata.updatedDate === "" ? post.metadata.date : post.metadata.updatedDate}</p>



            </div>
            {/* <Badge variant='outline' className='text-center'>❤️ 200</Badge> */}



          </div>


        </section>
        <Button asChild>
          <Link href="/blogPage">Back</Link>
        </Button>

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

