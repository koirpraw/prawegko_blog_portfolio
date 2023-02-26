import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ProjectCard from '@/components/projectCard';
import BlogPage from './blogPage';
// import { Navbar } from "@nextui-org/react";



import {
  Navbar,
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link,
  Grid,
  Card,
  Row,
  
} from '@nextui-org/react';
import MyNavBar from '@/components/myNavbar';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  
  const HomeText = ({text}) => (
    < h5>
      {text}
    </h5>

  )

  const CardContent = ({articleTitle,articleDate,artileRoute}) => (
    <Card.Body>
    <Row justify="space-between">
    <Link href={artileRoute}><Text color="primary">{articleTitle}</Text></Link>
    <Text color="default">{articleDate}</Text>
    
    </Row>
    </Card.Body>
  )

  
    

  return (
    
    <Container >
    <Head>
        <title>PRAWEGKO | Home</title>
        <meta
          name="description"
          content="Generated by create next app and using NextUI as a react UI library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Container
        as="main"
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
        // style={{ height: '100vh' }}
      >


 
   <MyNavBar />
      
      

        <Spacer />
      <h1>Hey, I'm Praweg 👋 </h1>
      <Spacer y={2}/>
      <Container >
      <h5>Software developer from ☀️ Colrado.<br></br>
        I write about <Link color="primary" href="https://github.com/koirpraw"> programming  </Link> & Designing Concepts in Mobile/Web Applications.<br></br> 
        Outside of the Computer world, I ❤️ 🪚 wood-working, 🏃🏽‍♂️running, ⚒️ DIY Projects. </h5>
        {/* <Image src="/next.svg" alt="Vercel Logo" width={200} height={200} /> */}
        <Spacer y={2} />
        <h1> Previous Posts</h1>
      </Container>
<Container>
<Card display="flex" direction="row">
        <CardContent articleTitle="Flutter: How to Create a simple Todo Application" articleDate="12/12/2021"/>
       
        <Card.Divider/>
        <CardContent articleTitle="Flutter: Create App Theme using GetX" articleDate="12/12/2021" artileRoute={"#"}/>
        <Card.Divider/>
        <CardContent articleTitle="React: How to create a simple CRUD Application with Firebase Backend" articleDate="12/12/2021"/>
        <Card.Divider/>
        <CardContent articleTitle="Flutter: Vizualize Data like an expert using SF Charts library" articleDate="12/12/2021"/>
        <Card.Divider/>
        <CardContent articleTitle="Flutter: Vizualize Data like an expert using SF Charts library" articleDate="12/12/2021"/>
        <Card.Divider/>
        <CardContent articleTitle="Flutter: Vizualize Data like an expert using SF Charts library" articleDate="12/12/2021"/>
        <Card.Divider/>
        <CardContent articleTitle="Flutter: Vizualize Data like an expert using SF Charts library" articleDate="12/12/2021"/>
        <Card.Divider/>
        <CardContent articleTitle="Flutter: Vizualize Data like an expert using SF Charts library" articleDate="12/12/2021"/>
        <Card.Divider/>
        
        
        
        
        
        </Card>
</Container>
<Spacer y={2} />
<h3>Top Projects</h3>
<Grid.Container  gap={2} display="flex" direction="Column" justify="center" alignItems="center">
<Grid.Container gap={2} display="flex" direction="Row" justify="space-between">

 <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" publishedDate="12/02/22"  imageURL="https://nextui.org/images/card-example-2.jpeg"/>

  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" publishedDate="12/15/22" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" publishedDate="01/05/23"  imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>


</Grid.Container>

        

</Grid.Container>
        

       
        <Spacer  y={2}/>
        <Button color={"gradient"}>
        <Row justify='center' align='center'>
        <h3>🦊</h3>
        <Spacer x={1}/>
        <h5>Github</h5>
        {/* <a
            className={styles.button}
            href="https://github.com/koirpraw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show on Github
          </a> */}
        </Row>
        
      
       
       
        

        
         
      
        </Button>
      </Container>
      </main>
      
      <footer className={styles.footer}>
      <Grid.Container gap={1} display="flex" direction="Column" justify="center" alignItems="center" alignContent="center">
      <Grid.Container gap={2} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
      <Grid>
      <p>Made with ❤️ by Praweg Koirala </p>
      </Grid>
      <Grid>
      <p>NewsLetter </p>
      </Grid>
      <Grid>
      <p>Ko-Fi </p>
      </Grid>
      <Grid>
      <p>Patreon </p>
      </Grid>
     
        <p></p>
        
        </Grid.Container>
        <Grid.Container gap={2} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
      <Grid>
      <Row>
      
      <p> 🌐 Next.js </p>
      </Row>
      
      </Grid>
      <Grid>
      <p>Notion </p>
      </Grid>
      <Grid>
      <p>Vercel </p>
      </Grid>
   
     
        <p></p>
        
        </Grid.Container>
        <Grid.Container gap={2} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
      <Grid>
      <p>@Copyright 2023</p>
      </Grid>
      </Grid.Container>
        </Grid.Container>
        
        

        
      </footer>
      <ThemeSwitch/>


    </Container>
    

   
   
    
  );
}