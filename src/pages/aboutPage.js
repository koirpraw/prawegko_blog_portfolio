import styles from "@/styles/Home.module.css";
import MyFooter from "@/components/Footer";
import Head from "next/head";
import { Avatar, Grid,Text,Container, Spacer,Link,User, Divider } from "@nextui-org/react";
import { FaGithub,FaTwitter,FaLinkedin, FaYoutube } from "react-icons/fa";
import {SiReact,SiFlutter,SiNodedotjs,
    SiNextdotjs,SiHtml5,SiAdobexd,SiFigma,
    SiAdobeillustrator,SiVisualstudiocode,SiAndroidstudio,
     SiXcode,SiApple,SiAmazonaws,SiGooglecloud,SiGithub,
      SiMongodb, SiMysql,SiAndroid, SiGithubactions, SiVercel, SiJavascript, SiCss3, SiExpress, SiDart} from "react-icons/si";
import ExperienceBadge from "@/components/ExperienceBadge";

import ResponsiveNavBar from "@/components/ResponsiveNavbar";
import { DownloadResume } from "@/components/downloadResume";


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
<Container gap={2} display="flex" direction="row" justify="center" alignItems="center" >
<h5>Praweg Koirala (He/Him)</h5>
</Container>
<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<a  justify="center" alignItems="center" target="_blank" rel="noopener noreferrer" href="https://github.com/koirpraw"><FaGithub size={24} color="black"/><Spacer x={0.1}/></a>
</Grid>
<Grid>|</Grid>
<Grid>
<a  justify="center" alignItems="center" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/praweg-koirala-50700732/"><FaLinkedin size={24} /><Spacer x={0.1}/></a>
</Grid>
<Grid>|</Grid>
<Grid>
<a  justify="center" alignItems="center" target="_blank" rel="noopener noreferrer" href="https://twitter.com/prawegko"><FaTwitter size={24} /><Spacer x={0.1}/></a>
</Grid>
<Grid>|</Grid>

<Grid>
<a  justify="center" alignItems="center" target="_blank" rel="noopener noreferrer" href="https://github.com/koirpraw"><FaYoutube size={24} color="red" /><Spacer x={0.1}/></a>
</Grid>
</Grid.Container>
</Container>
<Container gap={2} display="flex" direction="column" justify="center" alignItems="left" >

{/* <Spacer y={1}/> */}

<h3 style={{textAlign:"center"}}> About me:</h3>
<Spacer y={0.5}/>

<p>I'm Praweg, a Software Developer based in the beautiful state of Colorado.
I'm proud to say I'm a self-taught programmer who thrives on constant learning and growth.
</p> 
<Spacer y={0.5}/>
<p>I've been immersed in the world of Dart and Flutter since early 2021, crafting mobile applications for Android and iOS.
 Around mid-2022, I ventured into the realm of JavaScript frameworks and libraries,
 and I've been passionately working with the likes of React, NextJS, Node.js, Express, MongoDB, MySQL,
and the expansive realm of AWS Cloud.</p>
  <Spacer y={0.5}/>
<p>
Before my coding escapades, I was knee-deep in mobile app development,
juggling Android and iOS, primarily leveraging the prowess of low-code and no-code platforms.
The roster includes Adalo, FlutterFlow, Andromo, BuzzTouch, GameSalad, Buildbox, among others.
</p>
<Spacer y={0.5}/>
<p>My journey kicked off in the Healthcare Industry, where I spent roughly a decade as a dedicated Medical Technologist (2010-2020).
Alongside my lab work, a spark of curiosity led me into the world of mobile app development back in 2012.
This journey of tinkering with no-code tools, often side by side with my equally inquisitive brother, planted the seeds of a tech-driven passion within me.</p>
<Spacer y={0.5}/>
<p>
As time went on, it became clear that my heart was firmly rooted in the realm of technology and creative expression. Making the leap from healthcare to tech was a defining moment, and I've never looked back. Now, I'm in my element – dedicating countless hours to tutorials, coding challenges, and online courses. The more I learn, the more I uncover the vastness of what I have yet to explore.
</p>
<Spacer y={0.5}/>
<p style={{textAlign:"center"}}>Join me on this exhilarating journey of continuous learning and innovation!</p>



<Spacer y={1}/>

<h3 style={{textAlign:"center"}}> My Tech Stack</h3>

<Spacer y={1.5}/>

<Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Web" icon={<SiReact size="18" color="blue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Android" icon={<SiAndroid size="18" color="green"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="iOS" icon={<SiApple size="18" color="black"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="AndroidStudio" icon={<SiAndroidstudio size="18" color="green"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="VS Code" icon={<SiVisualstudiocode size="18" color="blue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="XCODE" icon={<SiXcode size="18" color="blue"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Dart" icon={<SiDart size="18" color="blue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="JavaScript/TypeScript" icon={<SiJavascript size="18" color="red"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Html" icon={<SiHtml5 size="18" color="red"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="CSS" icon={<SiCss3 size="18" color="red"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Flutter" icon={<SiFlutter size="18" color="lightBlue"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="React" icon={<SiReact size="18" color="red"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="NextJS" icon={<SiNextdotjs size="18" color="black"/>}/>
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
<ExperienceBadge title="MongoDB" icon={<SiMongodb size="18" color="green"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="MySQL" icon={<SiMysql size="18" color="blue"/>}/>
</Grid>
</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<ExperienceBadge title="Vercel" icon={<SiVercel size="18" color="black"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="GoogleCloud" icon={<SiGooglecloud size="18" color="orange"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="AWS" icon={<SiAmazonaws size="18" color="orange"/>}/>
</Grid>

</Grid.Container>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >

<Grid>
<ExperienceBadge title="Github-CoPilot" icon={<SiGithub size="18" color="black"/>}/>
</Grid>
<Grid>
<ExperienceBadge title="Prompt Engineering" icon={<SiGithubactions size="18" color="black"/>}/>
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

</Container>

<Spacer y={2}/>



</Container>



<Container  direction="Column"  justify="center">

<h3 style={{textAlign:"center"}}>Certificates</h3>
<Spacer y={1}/>
<div style={{textAlign:"center"}}>
<p><a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/01e6f2e9-bc47-4fb4-bec7-0dbc6665ebc6/public_url"> AWS Certified Cloud Practitioner </a> : AWS</p>
<a a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/certificate/UC-1aa93ce4-a072-499b-905b-9f19ab2e64c4/">The Complete 2022 Web Development Bootcamp</a> : UDEMY<br></br>
<p><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1pGaBmpx8Nrb-4anh1Q8Slg1fYmxqOH_K/view">The Complete Flutter 2021 Bootcamp with Dart</a> : The App Brewery

</p>
</div>

</Container>

<Spacer y={1}/>

<Container  direction="Column"  justify="center">
<Spacer y={0.5}/>

<h3 style={{textAlign:"center"}}>Training & Courses</h3>
<Spacer y={1}/>
<div style={{textAlign:"center"}}>
Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02 - by Stephane Maarek, UDEMY<br></br>
MongoDB Associate Developer (MongoDB NodeJS Developer path) - by MongoDB University<br></br>
Back End Development and APIs(with Node.js and MongoDB) - by FreeCodeCamp.org<br></br>
The Complete 2022 Web Development Bootcamp - by Dr.Angela Yu, UDEMY<br></br>
<p>Flutter Bootcamp with Dart ,The Complete Guide 2021 - by Dr.Angela Yu, The App Brewery<br></br>
Flutter & Dart - The Complete Guide [2021 Edition] - by Dr.Angela Yu, The App Brewery<br></br>
100 Days of Code: The Complete Python Pro BootCamp for 2023 - by Dr.Angela Yu, UDEMY(in Progress..i plan to finish by end of this year🤞)<br></br>
</p>
</div>

{/* <Spacer y={1}/>

<Grid.Container gap={1} display="flex" direction="row" justify="center" >
<Grid>
<DownloadResume/>
</Grid>
</Grid.Container> */}



</Container>
<Spacer y={1}/>
<Container direction="Column"  justify="center">
<h3 style={{textAlign:"center"}}> Currently working on:</h3>
<Spacer y={0.5}/>


<div style={{textAlign:"center"}}>
<p>Helapy: A Fitness & Wellness Tracking app. (Flutter)  </p>
<p>MamaDo: A Task Management app for new Mama's and Dada's of the world.(Flutter)</p>
<p>My Portfolio/Blog Website (NextJS + Notion)</p>
<p>K Duo Apps,Business Portfolio Site: <a href="https://kduoapps.com/"> kduoapps.com (NextJS + Notion)</a></p>
</div>

</Container>



<Container  direction="Column"  justify="center">
<Spacer y={0.5}/>

<h3 style={{textAlign:"center"}}>Site Facts 🧑‍💻 </h3>
<Spacer y={1}/>
<div style={{textAlign:"center"}}>
<p>👉 This Site is built with NextJS & hosted on Vercel(for free 🤑.. for now )</p>
<p>👉 The Blog on this site uses Notion as a CMS/database(pretty cool huh! makes writing a breeze)</p>
<p>👉 Most of the Design on this site uses NextUI(a NextJS library) with some Bootstrap and custom CSS</p>

</div>
<Spacer y={2}/>

</Container>


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


 {/* <p style={{fontSize:15}}> I am Praweg - A Software Developer from Colorado.
I am a Self-taught programmer. I have been coding with Dart(Flutter) since early 2021 .
I have been Learning and coding with JS frameworks/libraries since mid 2022.
I am currently working with React+NextJS, Node.js/Express, MongoDB, MySQL and AWS Cloud.<br></br>
<Spacer y={0.5}/>
Prior to start coding i have worked in mobile app development with Android and iOS, mostly using low-code/no-code platforms.
Some of these platforms include Adalo, FlutterFlow, Andromo, BuzzTouch, GameSalad, Buildbox .. to name few.
</p>
<Spacer y={0.5}/>
<p style={{fontSize:15}}>
My Professional Career initially started working in HealthCare Industry. I worked as a Medical Technologist for approx 10 years(2010-2020).
I picked up Mobile App development as a curious endeavor back in 2012, while working fulltime in the lab - this was a result of simply tinkering around with nocode tools along with my brother (who is also curious about things as i am).
Later i realized my interest lied mostly in tech and Creative Fields and decided to persue a career in Tech instead and said good bye to being a Healthcare worker.And here i am now spending several hours a day going through tutorials and coding.
Taking online courses on everything possible and still realizing how much i dont know.
</p> */}
