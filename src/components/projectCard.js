
import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card';


const ProjectCard = ({ projectTitle, projectDescription, publishedDate, imageURL, projectLink }) => (


  <Card className="hover:shadow-xl">
    <CardHeader>
      <div>
        <img src={imageURL} />
      </div>
      <CardTitle>{projectTitle}</CardTitle>
      <CardDescription>{projectDescription}</CardDescription>
    </CardHeader>
    <CardContent>


    </CardContent>
    <CardFooter>{publishedDate}</CardFooter>


  </Card>

)

export default ProjectCard;




