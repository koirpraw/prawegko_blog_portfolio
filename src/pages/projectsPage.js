import MyFooter from "@/components/Footer";
import MyNavBar from "@/components/myNavbar";
import ResponsiveNavBar from "@/components/ResponsiveNavbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Card, Container, Spacer,Text } from "@nextui-org/react";
import Link from "next/link";


function Projects() {
  return (
    // <Container as="main" display="flex" direction="column"  >
    <div>
    
    {/* <MyNavBar/> */}
    <ResponsiveNavBar/>
    <Spacer y={10}/>
    <Container  display="flex" direction="column" justify="center" alignItems="center" >
    <Card justify="center">
    <Card.Header>
    <Text justify="center" h1 >Projects</Text> 
    </Card.Header>
    <Card.Divider/>
    <Card.Body>
        <h1 style={{fontSize:"60"}}>Coming Soon ...</h1>
        <p>Until then, checkout my repo in  <Link  href="https://github.com/koirpraw">  Github </Link></p> 
    </Card.Body>

        
    </Card>
        
        </Container>
        <Spacer y={8}/>
        <MyFooter/>

        {/* </Container> */}
        </div>
   

  )
}

export default Projects;