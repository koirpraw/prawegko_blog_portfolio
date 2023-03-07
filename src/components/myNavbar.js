import { Navbar, Text,Spacer } from "@nextui-org/react";

export default function MyNavBar(){
    return(
        <Navbar isBordered variant={"floating"}>
        {/* <Navbar isBordered variant={"static"}> */}
        <Navbar.Brand>
          {/* <AcmeLogo /> */}
          <h2> ☕︎ </h2><Spacer x={.5}/>
          <Text b color="inherit" hideIn="xs">
             PRAWEGKO.dev
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/" activeColor={"primary"}>Home</Navbar.Link>
          <Navbar.Item>|</Navbar.Item>
          <Navbar.Link  href="/blogPage" activeColor={"primary"}>Blog</Navbar.Link>
          <Navbar.Item>|</Navbar.Item>
          <Navbar.Link href="/projectsPage" activeColor={"primary"}>Projects</Navbar.Link>
          <Navbar.Item>|</Navbar.Item>
          <Navbar.Link href="/aboutPage" activeColor={"primary"}>About</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    )
}