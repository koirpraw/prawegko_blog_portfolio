import Head from 'next/head';

import ProjectCard from '@/components/projectCard';
import { FaGithub } from 'react-icons/fa';
import { getAllPublished } from '@/lib/notion';

import Link from 'next/link';

import IntroTexts from '@/components/IntroTexts';

import { Button } from '@/components/ui/button';
import IntroSocialButtons from '@/components/introSocialButtons';




function Home({ posts, image }) {
  const HomeText = ({ text }) => (
    < h5>
      {text}
    </h5>
  )



  return (
    // <div >
    <>
      <Head>
        <title>PK | Home</title>
        <meta
          name="description"
          content="Home page of Praweg Koirala's personal website featuring Blog & Portfolio."
        />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>


      <div className="flex flex-col items-center justify-evenly px-24">
        <div className="flex flex-col items-center justify-center min-h-screen p-24 space-x-10 space-y-8 lg:flex-row ">
          <section id="about" className="mt-12">
            <IntroTexts />
            <IntroSocialButtons />
          </section>
          <div>
            <img
              src="/pk_profile.jpg"
              alt="Praweg Koirala"
              // width={300}
              // height={300}
              className="w-[300px] h-[320px] grayscale backdrop-blur-sm shadow-2xl shadow-slate-300 rounded-3xl hover:contrast-125 hover:grayscale-0 hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
            />
          </div>

        </div>


        {/* <div className="flex lg:flex-row  items-center justify-between min-h-screen p-24 space-x-20 ">
          <section id="about" className="mt-12 space-y-6">
            <IntroTexts />
            <IntroSocialButtons />

          </section>
          <div>
            <img
              src="/pk_profile.jpg"
              alt="Praweg Koirala"

              className="w-[300px] h-[300px] grayscale backdrop-blur-sm shadow-2xl shadow-slate-300 rounded-3xl hover:contrast-125 hover:grayscale-0 hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
            />
          </div>
        </div> */}


        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h3 className='text-4xl text-slate-600'>Recent Posts</h3>
          <div className='p-4'>

            {posts.slice(0, 8).map((post, index) => (
              <div key={index} className='flex flex-row justify-start items-center space-x-16  p-3'>
                <Link href={`/posts/${post.slug}`}><p className='text-slate-600 text-2xl font-light hover:text-blue-500'>{post.title}</p></Link>
                <p className='text-slate-600 text-xl font-light'>{post.date}</p>
              </div>

            ))}
          </div>
          <Link href='/blogPage'>
            <Button>All Posts</Button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          <h3 className='text-4xl text-slate-600'>Recent Projects</h3>

          <div className="flex flex-col lg:flex-row md:flex-col gap-4">
            {posts.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} projectTitle={project.title} projectDescription={project.title} publishedDate={project.date} imageURL="https://nextui.org/images/card-example-2.jpeg" projectLink={`/posts/${project.slug}`} />
            ))}
          </div>

          <a target="_blank" href="https://github.com/koirpraw" rel="noopener noreferrer">
            <Button className="h-10">
              <FaGithub /> &nbsp; More Projects
            </Button>
          </a>
        </div>
      </div>
    </>



  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished()
  return {
    props: {
      posts: data
    },
    revalidate: 60
  };


}

export default Home;