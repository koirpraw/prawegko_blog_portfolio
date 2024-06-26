import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { getAllPublished } from '@/lib/notion';

import Link from 'next/link';

import IntroTexts from '@/components/IntroTexts';

import { Button } from '@/components/ui/button';
import IntroSocialButtons from '@/components/introSocialButtons';
import Project from '@/components/project';
import { projects } from "@/data/projects_data"




function Home({ posts, }) {


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



      <div className="flex flex-col items-center justify-evenly ">
        <div className="flex flex-col items-center justify-center min-h-screen py-6 space-y-3 lg:space-y-6 ">
          <div className='flex flex-col items-center justify-evenly space-x-12 lg:flex-row '>
            <IntroTexts />

            <img
              src="/pk_profile.jpg"
              alt="Praweg Koirala"
              // width={300}
              // height={300}
              className="w-[300px] h-[320px] grayscale backdrop-blur-sm light:shadow-2xl shadow-slate-300 rounded-3xl hover:contrast-125 hover:grayscale-0 hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
            />


          </div>

          <IntroSocialButtons />

        </div>


        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h3 className='text-4xl text-slate-600'>Recent Notes</h3>
          <div className='p-4'>

            {posts.slice(0, 5).map((post, index) => (
              <div key={index} className='flex flex-row justify-start items-center space-x-16  p-3'>
                <Link href={`/posts/${post.slug}`}><p className='text-slate-600  font-light hover:text-blue-500'>{post.title}</p></Link>
                <p className='light:text-slate-600 text-lg font-light'>{post.date}</p>
              </div>

            ))}
          </div>
          <Link href='/blogPage'>
            <Button>All Notes</Button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-6">
          <h3 className='text-4xl light:text-slate-600'>Recent Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4">
            {projects.slice(0, 3).map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                githubLink={project.github}
                projectLink={project.link}
                techStack={project.techStack}
              />
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