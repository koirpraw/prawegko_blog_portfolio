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
        justify='center'
        alignItems="center"
      
        // justify="center"
        // alignItems="center"
        // style={{ height: '100vh' }}
      >

{/* <ThemeSwitch/> */}
 
   {/* <MyNavBar /> */}
   
      
      

        <Spacer />
    
     <Container gap={2} display="flex" direction="row" justify="left" alignItems="center" >
     <h2>Hey, I'm Praweg 👋 </h2>
      <Spacer y={1}/>
      <p style={{fontSize:18}}>Software developer from ☀️ Colorado.<br></br>
      <Spacer y={1}/>
        In my blog, i document my learnings regarding programming concepts in Mobile & Web Applications along with Cloud Integration, with focus in AWS Cloud.
        Under Projects section, i try to share completed projects that i have worked on to showcase my skills. I am a self-taught programmer so i spend most of my available times on online courses, reading blogs, and watching videos to learn new skills.
        I am also a new Dad 👶🏽, so i spend most of the other remaining time running around a toddler.<br></br>
        If i have any spare time i love to run 🏃🏽‍♂️ or do some woodworking projects in my garage workshop. </p>
        <Spacer y={3}/>
        <p style={{fontStyle:'italic'}}>****  this site is still under construction **** . please ignore the mess 😉</p>
        {/* <Image src="/next.svg" alt="Vercel Logo" width={200} height={200} /> */}
        <Spacer y={2} />
        </Container>
      
     

<Container gap={2} display="flex" direction="row" justify="center" alignItems="center" >
<h3>Recent Posts</h3>
          <Card display="flex" direction="row" >
          {posts.map((post,index)=>(
          <CardContent articleTitle={post.title} articleDate={post.date} artileRoute={`/posts/${post.slug}`}/>
          ))}
          <Link href="/blogPage"><Spacer x={24}/> More ..</Link> 
          <Spacer/>
           
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
      <Spacer  y={1}/>
        <a target="_blank" href="https://github.com/koirpraw" rel="noopener noreferrer">
        <Button shadow
        color={"gradient"}
        >
          <FaGithub/> &nbsp; More Projects 
        </Button>
        </a>
       

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