

import Head from "next/head";
import Project from "@/components/project";
import ProjectCard from "@/components/projectCard";




function projectsPage({ }) {



  return (
    <>
      <Head>
        <title>PK | Projects</title>
        <meta
          name="description"
          content="Projects page of Praweg Koirala's personal website featuring Blog & Portfolio." />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>


      <div className="flex flex-col justify-center items-center min-h-screen">


        <Project />




      </div>
    </>
  )

}




export default projectsPage;