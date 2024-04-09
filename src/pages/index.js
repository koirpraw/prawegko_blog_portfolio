import Head from 'next/head';

import ProjectCard from '@/components/projectCard';
import { FaGithub } from 'react-icons/fa';
import { getAllPublished } from '@/lib/notion';

import Link from 'next/link';

import IntroTexts from '@/components/IntroTexts';

import { Button } from '@/components/ui/button';
import IntroSocialButtons from '@/components/introSocialButtons';
import Project from '@/components/project';




function Home({ posts, }) {
  // const HomeText = ({ text }) => (
  //   < h5>
  //     {text}
  //   </h5>
  // )
  const projects = [
    {
      title: 'Bing Co-Pilot AI Chatbot App, Mobile Application',
      description:
        'A Clone of Bing Co-Pilot app built with Flutter using Open AI Api. ',
      techStack: ['Flutter', 'OpenAI'],
      image: "https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp",
      link: 'https://prawegko.dev',
      github: 'https://github.com/koirpraw/bing_copilot_ai_clone_flutter',
    },
    {
      title: 'GoatReport- A Fitness Tracking app, Mobile Application',
      description:
        'UI clone of Fitness Tracking app called Metriport. Uses SynFusion Library for Data Visulaization. A great example to implement UX for data heavy applications. ',
      techStack: ['Flutter', 'GetX', 'Sync Fusion'],
      image: "https://images.unsplash.com/photo-1710959781827-5fe4b8f058b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: '',
      github: 'https://github.com/koirpraw/goatreport',
    },
    {
      title: 'MERN Stack, Job Finder/Job Listing App, Web Application',
      description:
        'A full Stack App with MongoDB, Express JS, React & Node JS. Job Listing App that allows to create new Job listing,and edit/delete posting',
      techStack: ['Flutter', 'OpenAI'],
      image: "https://images.unsplash.com/photo-1710959781827-5fe4b8f058b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: '',
      github: 'https://github.com/koirpraw/bing_copilot_ai_clone_flutter',
    },
    {
      title: 'Task Management App ',
      description:
        'A full Stack App with MongoDB, Express JS, React & Node JS. Job Listing App that allows to create new Job listing,and edit/delete posting',
      techStack: ['Flutter', 'OpenAI'],
      image: "https://images.unsplash.com/photo-1710959781827-5fe4b8f058b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: '',
      github: 'https://github.com/koirpraw/bing_copilot_ai_clone_flutter',
    },
  ]



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



      <div className="flex flex-col items-center justify-evenly px-16">
        <div className="flex flex-col items-center justify-center min-h-screen py-6 space-y-3 lg:space-y-6 ">
          <div className='flex flex-col items-center justify-around space-x-12 lg:flex-row '>
            <IntroTexts />

            <img
              src="/pk_profile.jpg"
              alt="Praweg Koirala"
              // width={300}
              // height={300}
              className="w-[300px] h-[320px] grayscale backdrop-blur-sm shadow-2xl shadow-slate-300 rounded-3xl hover:contrast-125 hover:grayscale-0 hover:rotate-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
            />


          </div>

          <IntroSocialButtons />

        </div>


        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h3 className='text-4xl text-slate-600'>Recent Posts</h3>
          <div className='p-4'>

            {posts.slice(0, 8).map((post, index) => (
              <div key={index} className='flex flex-row justify-start items-center space-x-16  p-3'>
                <Link href={`/posts/${post.slug}`}><p className='text-slate-600 text-xl font-light hover:text-blue-500'>{post.title}</p></Link>
                <p className='text-slate-600 text-lg font-light'>{post.date}</p>
              </div>

            ))}
          </div>
          <Link href='/blogPage'>
            <Button>All Posts</Button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          <h3 className='text-4xl text-slate-600'>Recent Projects</h3>

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