import React from "react";
// import { Card, Text, Grid, Link } from "@nextui-org/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from "@nextui-org/react";
import Link from 'next/link';
import { Code, ListCollapse } from 'lucide-react';

function Project({ title, description, image, githubLink, projectLink, techStack }) {
  return (
    // <div className="flex flex-col w-full ">
    <Card className=" hover:shadow-xl lg:h-[800px]">
      <CardHeader >

        <img
          width="full"
          src={image}

        />
        {/* </div> */}
        <CardTitle className="text-center text-lg">

          {/* PlaceHolder Project Title */}
          {title}

        </CardTitle>

      </CardHeader>
      <CardContent className="flex flex-wrap">
        <h5>{techStack}</h5>





      </CardContent>
      <CardDescription className="ml-6 text-lg">
        {description}

        {/* This Project gives you a quick overview on how to complete a task in very efficient manner.<br />
          It is a snapshot of memory & time ......... */}

      </CardDescription>

      <CardFooter className=" space-x-2 font-medium mt-4">
        {githubLink == "" || null ? '' : <Link href={githubLink}><div className="flex justify-evenly items-center"><Code /> <p>Source Code</p></div></Link>}


        {projectLink == "" ? <Link href={projectLink}>Live Demo</Link> : ""}

      </CardFooter>


    </Card>

    // </div>


  );
}

export default Project;