import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ProjectCard from '@/components/projectCard';
import { FaGithub } from 'react-icons/fa';
import { getAllPublished } from '@/lib/notion';
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
  Divider,
  
} from '@nextui-org/react';
import MyNavBar from '@/components/myNavbar';
import ThemeSwitch from '@/components/ThemeSwitch';
import MyFooter from '@/components/Footer';
import ResponsiveNavBar from '@/components/ResponsiveNavbar';

 function Home({posts}) {
  const HomeText = ({text}) => (
    < h5>
      {text}
    </h5>
  )

  const CardContent = ({articleTitle,articleDate,artileRoute}) => (
    <Container>
   <Spacer/>
     <Row justify="space-between">
    <Link href={artileRoute}><Text color="primary">{articleTitle}</Text></Link>
    <Text color="default">{articleDate}</Text> 
    </Row>   
    <Divider/>
   </Container>
  )

  
  return (
    <div className={styles.contentContainer}>
    <Head>
        <title>PK | Home</title>
        <meta
          name="description"
          content="Home page of Praweg Koirala's personal website featuring Blog & Portfolio."
        />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>
      <ResponsiveNavBar/>
      <main>
      <Container
        as="main"
        display="flex"
        direction="column"
      
        // justify="center"
        // alignItems="center"
        // style={{ height: '100vh' }}
      >

{/* <ThemeSwitch/> */}
 
   {/* <MyNavBar /> */}
   
      
      

        <Spacer />
      <h1>Hey, I'm Praweg 👋 </h1>
      <Spacer y={1}/>
      <div >
      <h5>Software developer from ☀️ Colrado.<br></br>
        I write about <Link color="primary" href="https://github.com/koirpraw"> programming  </Link> & Designing Concepts in Mobile/Web Applications.<br></br> 
        Outside of the tech/digital world, I ❤️ wood🪚working, runn🏃🏽‍♂️ng, ⚒️ DIY Projects. </h5>
        {/* <Image src="/next.svg" alt="Vercel Logo" width={200} height={200} /> */}
        <Spacer y={2} />
      
      </div>
{/* <Container>
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
</Container> */}

<div>
<h3> Recent Posts</h3>
          <Card display="flex" direction="row" >
          {posts.map((post,index)=>(
          <CardContent articleTitle={post.title} articleDate={post.date} artileRoute={`/posts/${post.slug}`}/>
          ))}
          <Link href="/blogPage"><Spacer x={24}/> More ..</Link> 
          <Spacer/>
           
          </Card> 
          
          </div>
<Spacer y={2} />
<h3>Recent Projects</h3>
<Grid.Container  gap={2} display="flex" direction="Column" justify="center" alignItems="center">
<Grid.Container gap={2} display="flex" direction="Row" justify="space-between">

 <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" publishedDate="12/02/22"  imageURL="https://nextui.org/images/card-example-2.jpeg"/>

  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" publishedDate="12/15/22" imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>
  <ProjectCard projectTitle="Flutter: How to Create a simple Todo Application" publishedDate="01/05/23"  imageURL="https://user-images.githubusercontent.com/7278348/200156273-cf2842c1-7657-4f40-8286-d78320ffe7c3.png"/>

</Grid.Container>
      <Spacer  y={1}/>
        <Link href="https://github.com/koirpraw">
        <Button shadow
        color={"gradient"}
        >
          <FaGithub/> &nbsp; More Projects 
      
        </Button>
        </Link>

</Grid.Container>

  
      
        <Spacer/>
      </Container>
      </main>
      
      <footer className={styles.footerPin}>

        <MyFooter/>
      </footer>

    </div>

  );
}

export const getStaticProps = async()=>{
  const data = await getAllPublished()
      return{
          props:{
              posts: data
          },
          revalidate: 60
      };
  

}

export default Home;