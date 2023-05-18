import styles from "@/styles/Home.module.css";
import MyFooter from "@/components/Footer";
import Head from "next/head";
import { Avatar, Grid,Text,Container, Spacer,Link,User, Divider } from "@nextui-org/react";
import { FaGithub,FaTwitter,FaLinkedin, FaYoutube } from "react-icons/fa";
import {SiReact,SiFlutter,SiFirebase,SiNodedotjs,
    SiExpress,SiNextdotjs,SiHtml5,SiAdobexd,SiFigma,
    SiAdobeillustrator,SiVisualstudiocode,SiAndroidstudio,
     SiXcode,SiApple,SiAwsamplify,SiAmazonaws,SiGooglecloud, SiMongodb, SiMysql} from "react-icons/si";
import ExperienceBadge from "@/components/ExperienceBadge";

import ResponsiveNavBar from "@/components/ResponsiveNavbar";


function AboutPage(){
//    const FrontEnd = new [React,NextJS,Flutter]
    return (
        // 
        <div className={styles.contentContainer}>
        {/* <h2 style={{textAlign:"center"}}>About</h2> */}
        {/* <ThemeSwitch/> */}
        
        {/* <MyNavBar/> */}
        <Head>
        <title>PK | About</title>
        <meta
          name="about page"
          content="profile and Intro of the author of this blog/Portfolio, Praweg koirala"
        />
         <link rel="icon" href="/pkSite_favicon.png" />
        </Head>

        <ResponsiveNavBar/>
        <Spacer y={2}/>
        <main>
        <Container gap={2} display="flex" direction="column" justify="center" alignItems="center" >
        
        <Container gap={2} display="flex" direction="row" justify="center"    >
        <Avatar
        src="https://avatars.githubusercontent.com/u/7278348?v=4"
       
        // height={400}
        // width={400}
        bordered
        color="gradient"
       circle
        zoomed
        justify="center"
        css={{height:"175px",width:"175px"}}
        />
      
        
        
        
</Container>
<Spacer y={0.5}/>
<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<Link  justify="center" alignItems="center" href="https://github.com/koirpraw"><FaGithub size={24} color="default"/><Spacer x={0.1}/><p>Github</p></Link>
</Grid>
<Grid>|</Grid>
<Grid>
<Link  justify="center" alignItems="center" href="https://twitter.com/prawegko"><FaTwitter size={24} /><Spacer x={0.1}/><p>Twitter</p></Link>
</Grid>
<Grid>|</Grid>
<Grid>
<Link  justify="center" alignItems="center" href="https://github.com/koirpraw"><FaLinkedin size={24} /><Spacer x={0.1}/><p>LinkedIn</p></Link>
</Grid>
<Grid>|</Grid>
<Grid>
<Link  justify="center" alignItems="center" href="https://github.com/koirpraw"><FaYoutube size={24} color="red" /><Spacer x={0.1}/><p>Youtube</p></Link>
</Grid>
</Grid.Container>
</Container>
<Container gap={2} display="flex" direction="column" justify="center" alignItems="center" >

<Spacer y={1}/>

<h2 style={{textAlign:"center"}}> About me:</h2>
<Spacer y={0.5}/>
<p> I am Praweg Koirala - A Software Developer from Colorado.
I am a Self-taught programmer + designer. I have been coding with Flutter for about 2 years .<br></br>
I am currently working with React+NextJS for FrontEnd Web and Node.js/Express for the backend.<br></br>
</p>
<Spacer y={2}/>

<h2 style={{textAlign:"center"}}> Tech Stack</h2>
<Spacer y={0.5}/>
{/* <Grid.Container gap={2} display="flex" direction="row" justify="center" >
<Grid>
<SkillsCard title="FrontEnd" skill="React" />
</Grid>
<Grid>
<SkillsCard title="BackEnd"/>
</Grid>
<Grid>
<SkillsCard title="Design"/>
</Grid>
<Grid>
<SkillsCard title="Database"/>
</Grid>

</Grid.Container> */}

{/* <Divider/> */}
<Spacer y={1}/>

<Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Android" icon={<SiFlutter size="18" color="lightBlue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="iOS" icon={<SiApple size="18" color="black"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Web" icon={<SiReact size="18" color="blue"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="AndroidStudio" icon={<SiAndroidstudio size="18" color="green"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="VS Code" icon={<SiVisualstudiocode size="18" color="skyblue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="XCODE" icon={<SiXcode size="18" color="lightblue"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Flutter" icon={<SiFlutter size="18" color="lightBlue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="React" icon={<SiReact size="18" color="blue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="NextJS" icon={<SiNextdotjs size="18" color="black"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Html5" icon={<SiHtml5 size="18" color="red"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="NodeJS" icon={<SiNodedotjs size="18" color="green"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Express" icon={<SiExpress size="18" color="black"/>}/>
</Grid>
</Grid.Container>


<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="AdobeXD" icon={<SiAdobexd size="18" color="purple"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Figma" icon={<SiFigma size="18" color="blue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="AdobeIllustrator" icon={<SiAdobeillustrator size="18" color="Orange"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="MongoDB" icon={<SiMongodb size="18" color="green"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="MySQL" icon={<SiMysql size="18" color="blue"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Firebase" icon={<SiFirebase size="18" color="orange"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="GoogleCloud" icon={<SiGooglecloud size="18" color="orange"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="AWSAmplify" icon={<SiAwsamplify size="18" color="orange"/>}/>
</Grid>

</Grid.Container>

</Container>

<Spacer y={2}/>

<h2 style={{textAlign:"center"}}> Currently working on:</h2>
<Spacer y={0.5}/>

<p>Helapy: A Fitness & Wellness Tracking.  </p>
<p>MamaDo: A Task Management app for new Mama's and Dada's of the world.(Flutter)</p>
<p>My Portfolio/Blog Website (NextJS+Notion)</p>
<p>K Duo Apps,Business Portfolio Site: <a href="https://kduoapps.com/"> kduoapps.com</a></p>

</Container>
<Spacer y={2}/>


<Container display="inline-grid" direction="Column"  justify="center">
<Spacer y={1}/>

<h2 style={{textAlign:"center"}}>Training & Certificates</h2>
<Spacer y={1}/>
<div style={{textAlign:"center"}}>
<p>Flutter Bootcamp with Dart - The Complete Guide 2021<br></br>
Flutter & Dart - The Complete Guide [2021 Edition]- by Dr.Angela Yu, London App Brewery<br></br>
The Complete 2022 Web Development Bootcamp- by Dr.Angela Yu, UDEMY<br></br>
Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02- by Stephane Maarek, UDEMY(enrolled. anticipated completion summer end 2023)<br></br>
100 Days of Code: The Complete Python Pro BootCamp for 2023- by Dr.Angela Yu, UDEMY(enrolled..i plan to finish by end of the year🤞)<br></br>


</p>
</div>

</Container>
<Spacer y={2}/>
        </main>


<footer className={styles.footerPin}>
<MyFooter/>
</footer>
        
        </div>
    )
    

}

export default AboutPage;

{/* <Grid.Container gap={2}  >
<Grid><Avatar 
src="https://avatars.githubusercontent.com/u/46004116?v=4" 
// height={400}
// width={400}
size="xl"
bordered
color="blue"    
circle


 /></Grid> */}
