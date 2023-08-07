import styles from "../styles/Home.module.css";
import MyFooter from "@/components/Footer";
import ResponsiveNavBar from "@/components/ResponsiveNavbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Card, Container, Spacer,Text } from "@nextui-org/react";
import Link from "next/link";
import Head from "next/head";


function Projects() {
  return (
    // <Container as="main" display="flex" direction="column"  >
    <div className={styles.contentContainer}>
    <Head>
        <title>PK | Projects</title>
        <meta
          name="description"
          content="Projects page of Praweg Koirala's personal website featuring Blog & Portfolio."
        />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>
    
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
        <p>Until then, checkout my <Link  href="https://github.com/koirpraw">  Github </Link> repo.</p> 
    </Card.Body>

        
    </Card>
        
        </Container>
        <Spacer y={8}/>

        <footer className={styles.footerPin}><MyFooter/></footer>
        

        {/* </Container> */}
        </div>
   

  )
}

export default Projects;