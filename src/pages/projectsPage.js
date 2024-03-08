import styles from "../styles/Home.module.css";
import MyFooter from "@/components/Footer";
import ResponsiveNavBar from "@/components/ResponsiveNavbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import {  Container, Spacer,Text } from "@nextui-org/react";
import Link from "next/link";
import Head from "next/head";
import Project from "@/components/project";

import { Card, Grid} from "@nextui-org/react";

//  function Project(){
//     return(
//         <div>
//                <Card className="max-w-[340px]">
//       <CardHeader className="justify-between">
//         <div className="flex gap-5">
//           <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
//           <div className="flex flex-col gap-1 items-start justify-center">
//             <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
//             <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
//           </div>
//         </div>
//         <Button
//           className= "bg-transparent text-foreground border-default-200" 
//           color="primary"
//           radius="full"
//           size="sm"
//           variant="solid"
       
//         >
         
//         </Button>
//       </CardHeader>
//       <CardBody className="px-3 py-0 text-small text-default-400">
//         <p>
//           Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
//         </p>
//         <span className="pt-2">
//           #FrontendWithZoey 
//           <span className="py-2" aria-label="computer" role="img">
//             💻
//           </span>
//         </span>
//       </CardBody>
//       <CardFooter className="gap-3">
//         <div className="flex gap-1">
//           <p className="font-semibold text-default-400 text-small">4</p>
//           <p className=" text-default-400 text-small">Following</p>
//         </div>
//         <div className="flex gap-1">
//           <p className="font-semibold text-default-400 text-small">97.1K</p>
//           <p className="text-default-400 text-small">Followers</p>
//         </div>
//       </CardFooter>
//     </Card>
//         </div>
//     )
// }


function projectsPage({}){
 

  
return(
  <>
  <Head>
        <title>PK | Projects</title>
        <meta
          name="description"
          content="Projects page of Praweg Koirala's personal website featuring Blog & Portfolio."/>
        <link rel="icon" href="/pkSite_favicon.png" />
  </Head>
  <ResponsiveNavBar/>

    <div >


<Project/>

<Project/>

      {/* {projects.map((project,index)=>(
        <div key={index}>
          <Card>
            <Card.Header>
              <Link href={`/posts/${project.slug}`}><Text css={{fontSize:"20px",color:"gray900"}}>{project.title}</Text></Link>
            </Card.Header>
            <Card.Divider/>
            <Card.Body>
              <Text css={{color:"$gray600"}}>{project.date}</Text>
              <Text color="default">{project.description} ...</Text>
            </Card.Body>
            <Card.Footer>
              <Grid.Container gap={2} display="flex" direction="Row" justify="center">
                <Link css={{fontSize:"12px"}} href={`/posts/${project.slug}`}>Read More..</Link>
              </Grid.Container>
            </Card.Footer>
          </Card>
          <Spacer/>
        </div>

      ))} */}

    </div>
  </>
)

}



// function Projects() {
//   return (
//     // <Container as="main" display="flex" direction="column"  >
//     <div className={styles.contentContainer}>
//     <Head>
//         <title>PK | Projects</title>
//         <meta
//           name="description"
//           content="Projects page of Praweg Koirala's personal website featuring Blog & Portfolio."
//         />
//         <link rel="icon" href="/pkSite_favicon.png" />
//       </Head>
    
//     {/* <MyNavBar/> */}
//     <ResponsiveNavBar/>
//     <Spacer y={10}/>
//     <Container  display="flex" direction="column" justify="center" alignItems="center" >
//     <Card justify="center">
//     <Card.Header>
//     <Text justify="center" h1 >Projects</Text> 
//     </Card.Header>
//     <Card.Divider/>
//     <Card.Body>
//         <h1 style={{fontSize:"60"}}>Coming Soon ...</h1>
//         <p>Until then, checkout my <Link  href="https://github.com/koirpraw">  Github </Link> repo.</p> 
//     </Card.Body>

        
//     </Card>
        
//         </Container>
//         <Spacer y={8}/>

//         {/* <footer className={styles.footerPin}><MyFooter/></footer> */}
//         <div className={styles.footerPin}><MyFooter/></div>
        

//         {/* </Container> */}
//         </div>
   

//   )
// }

// export default Projects;
export default projectsPage;