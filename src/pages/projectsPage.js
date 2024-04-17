

import Head from "next/head";
import Project from "@/components/project";
// {
//   title: 'Bing Co-Pilot Clone-Flutter',
//   description:
//       'An AI-Chatbot. Clone of Bing Copilot',
//   techUsed: ['Flutter', 'OpenAI'],
//   image: frize,
//   link: '',
//   github: 'https://github.com/koirpraw/bing_copilot_ai_clone_flutter',
// },



function projectsPage() {


  const projects = [
    {
      title: 'AI Chatbot App, Mobile Application',
      description:
        'A Clone of Bing Co-Pilot app built with Flutter using Open AI Api. ',
      techStack: ['Flutter', 'OpenAI'],
      image: "https://pk-web-assets.s3.amazonaws.com/gitub-feature-template2.png",
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
      techStack: ['MongoDB', 'Express JS', 'React', 'Node JS'],
      image: "https://images.unsplash.com/photo-1710959781827-5fe4b8f058b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: '',
      github: 'https://github.com/koirpraw/bing_copilot_ai_clone_flutter',
    },
    {
      title: 'Task Management App ',
      description:
        'A full Stack App with MongoDB, Express JS, React & Node JS. Job Listing App that allows to create new Job listing,and edit/delete posting',
      techStack: ['Flutter', 'GetX'],
      image: "https://images.unsplash.com/photo-1710959781827-5fe4b8f058b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: '',
      github: 'https://github.com/koirpraw/bing_copilot_ai_clone_flutter',
    },
  ]




  return (
    <>
      <Head>
        <title>PK | Projects</title>
        <meta
          name="description"
          content="Projects page of Praweg Koirala's personal website featuring Blog & Portfolio." />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>


      <div className="flex flex-col justify-center items-center min-h-screen px-6">
        <h3 className="mb-12 text-5xl">Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-3/4">



          {projects.map((project, index) => (
            <Project key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.github}
              projectLink={project.link}
              techStack={project.techStack.join(" | ")}
            />
          ))}

        </div>

      </div>
    </>
  )

}




export default projectsPage;