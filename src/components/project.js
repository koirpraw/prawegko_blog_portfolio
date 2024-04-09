import React from "react";
// import { Card, Text, Grid, Link } from "@nextui-org/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from "@nextui-org/react";
import Link from 'next/link';
import { Code, ListCollapse } from 'lucide-react';

function Project({ title, description, image, githubLink, projectLink, techStack }) {
  return (
    // <div className="flex flex-col w-full ">
    <Card className=" hover:shadow-xl hover-shadow-">
      <CardHeader >

        <img

          src={image}

        />
        {/* </div> */}
        <CardTitle className="text-center text-lg">

          {/* PlaceHolder Project Title */}
          {title}

        </CardTitle>
        <CardDescription>
          {description}

          {/* This Project gives you a quick overview on how to complete a task in very efficient manner.<br />
          It is a snapshot of memory & time ......... */}

        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        <h5>Tech Stack</h5> :{techStack}





      </CardContent>

      <CardFooter className="justify-center">
        <Link href={githubLink}><Badge><Code /> SourceCode</Badge></Link>

        <Link href={projectLink}><Badge>Project</Badge></Link>

      </CardFooter>


    </Card>

    // </div>


  );
}

export default Project;