import Head from 'next/head'
import Link from 'next/link';
import { getAllPublished } from '@/lib/notion';
import styles from '../styles/Home.module.css'

export default function Blog({posts}) {
  if(!posts) return <h1>No posts</h1>
    return (
        <div className={styles.container}>
           <h1 className={styles.pageTitle}> 🌐 Vlog</h1>
           {posts.map((post, index) => (
          <section key={index} className={styles.card}>
            <div>
                <Link href={`/posts/${post.slug}`}>
                <a className={styles.action}>{post.title}</a>
                </Link>
                <div>
                    {post.date}
                </div>
            </div>
            <p>
              {post.description}
            </p>
          </section>
        ))}
        </div>
    )
    }

    export const getStaticProps = async()=>{
        const data = await getAllPublished()
            return{
                props:{
                    posts: data
                },
                revalidate: 60
            };
        
    }