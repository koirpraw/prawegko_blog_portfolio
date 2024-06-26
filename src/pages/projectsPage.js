

import Head from "next/head";
import Project from "@/components/project";
import TransitionHeader from "@/components/transitionHeader";
import { projects } from "@/data/projects_data";



function projectsPage() {


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
        <TransitionHeader title="Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-3/4">



          {projects && projects.map((project, index) => (
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