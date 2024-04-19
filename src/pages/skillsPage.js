
import Head from "next/head";
import TransitionHeader from "@/components/transitionHeader";

import {
  SiReact, SiFlutter, SiNodedotjs,
  SiNextdotjs, SiHtml5, SiAdobexd, SiFigma,
  SiAdobeillustrator, SiVisualstudiocode, SiAndroidstudio,
  SiXcode, SiApple, SiAmazonaws, SiGooglecloud, SiGithub,
  SiMongodb, SiMysql, SiAndroid, SiGithubactions, SiVercel, SiJavascript, SiCss3, SiExpress, SiDart
} from "react-icons/si";
import ExperienceBadge from "@/components/ExperienceBadge";





function SkillsPage() {

  const certificates = ['AWS Certified Cloud Practitioner : AWS',
    'The Complete 2022 Web Development Bootcamp : UDEMY',
    'The Complete Flutter 2021 Bootcamp with Dart : The App Brewery'];

  const courses = ['Ultimate AWS Certified Developer Associate 2023 NEW DVA-C02 - by Stephane Maarek, UDEMY',
    'UDEMY MongoDB Associate Developer (MongoDB NodeJS Developer path) - by MongoDB University',
    'Back End Development and APIs(with Node.js and MongoDB) - by FreeCodeCamp.org',
    'The Complete 2022 Web Development Bootcamp - by Dr.Angela Yu, UDEMY',
    'Flutter Bootcamp with Dart ,The Complete Guide 2021 - by Dr.Angela Yu, The App Brewery',
    'Flutter & Dart - The Complete Guide [2021 Edition] - by Dr.Angela Yu, The App Brewery'
  ];
  const currentProjects = ['Rebuilding this Site Prawegko.dev with NextJS 14 AppRouter, TypeScript & Tailwind CSS',
    'Kids Learning App, Mobile(Flutter) & Web(NextJS)'];

  const techStacks = []

  return (
    // 
    <>

      <Head>
        <title>PK | About</title>
        <meta
          name="about page"
          content="profile and Intro of the author of this blog/Portfolio, Praweg koirala"
        />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>



      <main className="flex flex-col justify-center items-center min-h-screen space-y-12 py-12 w-full">
        <TransitionHeader title="Skills" />

        <div className="flex flex-col justify-center items-center px-4 space-y-3">
          <h3 className="text-3xl"> My Tech Stack</h3>
          <div className="grid grid-cols-3 gap-2">
            <ExperienceBadge title="Web" icon={<SiReact size="18" color="blue" />} />
            <ExperienceBadge title="Android" icon={<SiAndroid size="18" color="green" />} />
            <ExperienceBadge title="iOS" icon={<SiApple size="18" color="black" />} />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <ExperienceBadge title="AndroidStudio" icon={<SiAndroidstudio size="18" color="green" />} />
            <ExperienceBadge title="VS Code" icon={<SiVisualstudiocode size="18" color="blue" />} />
            {/* <ExperienceBadge title="iOS" icon={<SiApple size="18" color="black" />} /> */}
            <ExperienceBadge title="XCODE" icon={<SiXcode size="18" color="blue" />} />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <ExperienceBadge title="Dart" icon={<SiDart size="18" color="blue" />} />
            <ExperienceBadge title="JS/TS" icon={<SiJavascript size="18" color="red" />} />
            <ExperienceBadge title="Html5" icon={<SiHtml5 size="18" color="red" />} />
            <ExperienceBadge title="CSS" icon={<SiCss3 size="18" color="red" />} />
          </div>

          <div className="grid grid-cols-5 gap-4">
            <ExperienceBadge title="Flutter" icon={<SiFlutter size="18" color="lightBlue" />} />
            <ExperienceBadge title="React" icon={<SiReact size="18" color="red" />} />
            <ExperienceBadge title="NextJS" icon={<SiNextdotjs size="18" color="black" />} />
            <ExperienceBadge title="NodeJS" icon={<SiNodedotjs size="18" color="green" />} />
            <ExperienceBadge title="Express" icon={<SiExpress size="18" color="black" />} />

          </div>

          <div className="grid grid-cols-3 gap-4">
            <ExperienceBadge title="MongoDB" icon={<SiMongodb size="18" color="green" />} />
            <ExperienceBadge title="MySQL" icon={<SiMysql size="18" color="blue" />} />

          </div>

          <div className="grid grid-cols-3 gap-4">
            <ExperienceBadge title="Vercel" icon={<SiVercel size="18" color="black" />} />
            <ExperienceBadge title="GoogleCloud" icon={<SiGooglecloud size="18" color="orange" />} />
            <ExperienceBadge title="AWS" icon={<SiAmazonaws size="18" color="orange" />} />

          </div>
          <div className="grid grid-cols-2 gap-4">
            <ExperienceBadge title="Github-CoPilot" icon={<SiGithub size="18" color="black" />} />
            <ExperienceBadge title="Prompt Engineering" icon={<SiGithubactions size="18" color="black" />} />

          </div>

          <div className="grid grid-cols-3 gap-4">
            <ExperienceBadge title="AdobeXD" icon={<SiAdobexd size="18" color="purple" />} />
            <ExperienceBadge title="Figma" icon={<SiFigma size="18" color="blue" />} />
            <ExperienceBadge title="AdobeIllustrator" icon={<SiAdobeillustrator size="18" color="Orange" />} />

          </div>
        </div>


        <div className="flex flex-col justify-evenly space-y-4 items-center px-6">
          <h3 className="text-3xl">Certificates:</h3>
          <ul>
            {certificates.map((certificate, index) => (
              <li key={index}><p>{certificate}</p></li>
            ))}

          </ul>

        </div>

        {/* <h3 style={{ textAlign: "center" }}>Certificates</h3>
          <Spacer y={1} />
          <div style={{ textAlign: "center" }}>
            <p><a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/01e6f2e9-bc47-4fb4-bec7-0dbc6665ebc6/public_url"> AWS Certified Cloud Practitioner </a> : AWS</p>
            <a a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/certificate/UC-1aa93ce4-a072-499b-905b-9f19ab2e64c4/">The Complete 2022 Web Development Bootcamp</a> : UDEMY<br></br>
            <p><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1pGaBmpx8Nrb-4anh1Q8Slg1fYmxqOH_K/view">The Complete Flutter 2021 Bootcamp with Dart</a> : The App Brewery

            </p>
          </div> */}

        <div className="flex flex-col justify-center space-y-4 items-center px-6">
          <h3 className="text-3xl">Training & Courses</h3>

          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>

            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center space-y-4 items-center px-6">
          <h3 className="text-3xl">Currently working on:</h3>
          <ul>
            {currentProjects.map((project, index) => (
              <li key={index}>{project}</li>

            ))}

          </ul>
        </div>

      </main>


    </>
  )


}

export default SkillsPage;
