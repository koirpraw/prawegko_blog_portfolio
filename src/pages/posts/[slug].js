
import Link from "next/link";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vscDarkPlus,dracula,} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {Spacer,Grid,Button,Container } from "@nextui-org/react";
import { getAllPublished,getSingleBlogPostBySlug } from "@/lib/notion.js";
import styles from "@/styles/Home.module.css";
// import styles from "@styles/blog.module.css";
import MyFooter from "@/components/Footer";


const CodeBlock = ({ language, codestring }) => {


    return (
        <SyntaxHighlighter language={language} style={dracula}  PreTag="div">
            {codestring}
        </SyntaxHighlighter>
    )
    }

const Post = ({ post }) => {
  function GoBack(){
    window.history.back();
  }
  return (
    <div>
    
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
  <h1 style={{textAlign:"center"}}>🌐 BLOG</h1>
    <Spacer/>
    
    <main  
    className={styles.blogContentContainer}
    >
    {/* <Container display="flex" direction="column" > */}
    <section className={styles.container}> 
        <h2 className={styles.blogPageTitle}>{post.metadata.title}</h2>
        
       
        <Grid.Container gap={2} justify="space-evenly" display="flex" direction="Row">
        <Grid>
        <h6 >🗓️ {post.metadata.date}</h6>
        </Grid>
        <Grid>
        <h5>📖 time:&nbsp;{post.metadata.readTime}</h5>
        </Grid>
        <Grid>
        <p style={{color: "gray"}}> 🏷️ &nbsp; &nbsp;{post.metadata.tags.join(' | ')}</p>
        </Grid>
        </Grid.Container>
        
        <Spacer/>
        <ReactMarkdown
        components={{
            code({node, inline, className, children, ...props}) {
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
       
        <Spacer y={2}/>
        <Grid.Container gap={1} justify="center" display="flex" direction="Row">
       
        <Button color={"success"} onClick={
          ()=>GoBack()
        }>Back</Button> 
        
        </Grid.Container>
      </section>
      {/* </Container> */}
    </main>
    


    <footer className={styles.footerPin}>
      <MyFooter/>
    </footer>
 


       
    </div>
      
  );
};

export const getStaticProps = async({params})=>{
    const post = await getSingleBlogPostBySlug(params.slug);
return{
props:{
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

