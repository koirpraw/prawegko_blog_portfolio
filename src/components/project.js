import React from "react";
// import { Card, Text, Grid, Link } from "@nextui-org/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card';

function Project() {
  return (
    <Card className="hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-center">
          <img className="h-[200px] w-[400px] rounded-lg" src="https://images.unsplash.com/photo-1710959781827-5fe4b8f058b2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <CardTitle><p className='text-xl font-medium text-slate-600 text-center'>PlaceHolder Project Title</p></CardTitle>
        <CardDescription><p>This Project gives you a quick overview on how to complete a task in very efficient manner.<br />
          It is a snapshot of memory & time .........
        </p></CardDescription>
      </CardHeader>
      <CardContent>


      </CardContent>
      <CardFooter className="justify-center"><p className="text-center">04/20/2020</p></CardFooter>


    </Card>

  );
}

export default Project;