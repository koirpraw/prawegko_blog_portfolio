import MyNavBar from "@/components/myNavbar";
import { Container, Card, Text, Button,Grid, Spacer,Head } from "@nextui-org/react";
import ProjectCard from "@/components/projectCard";
import MyFooter from "@/components/Footer";

function BlogPage(){
    return (
        
 <Container gap={2} display="flex" direction="column" justify="center" alignItems="center" alignContent="center">

    {/* <Head>
        <title>Blog</title>
    </Head> */}
 
       
       {/* <h2 style={{textAlign:"center"}}>Blog</h2> */}
       <MyNavBar/>
       
       <Spacer y={2}/>
       <Grid.Container  gap={2} display="flex" direction="Column" justify="center" alignItems="center">
<Grid.Container gap={2} display="flex" direction="Row" justify="center">

 <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" projectDescription="In this tutorial, we will learn how to create a simple todo application using flutter and firebase as a backend" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
<Spacer x={2}/>
  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" projectDescription="In this tutorial, we will learn how to create a simple todo application using flutter and firebase as a backend" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
  <Spacer x={2}/>
  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" projectDescription="In this tutorial, we will learn how to create a simple todo application using flutter and firebase as a backend" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
</Grid.Container>

<Spacer y={2}/>

<Grid.Container gap={2} display="flex" direction="Row" justify="center">
 <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" projectDescription="In this tutorial, we will learn how to create a simple todo application using flutter and firebase as a backend" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
<Spacer x={2}/>
  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" projectDescription="In this tutorial, we will learn how to create a simple todo application using flutter and firebase as a backend" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
  <Spacer x={2}/>
  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" projectDescription="In this tutorial, we will learn how to create a simple todo application using flutter and firebase as a backend" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>


</Grid.Container>


        

</Grid.Container>
<footer><MyFooter/></footer>
 
            </Container>
       
      
       
    )
}

export default BlogPage;


