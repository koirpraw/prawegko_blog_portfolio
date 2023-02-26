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
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Item>|</Navbar.Item>
          <Navbar.Link  href="/blogPage">Blog</Navbar.Link>
          <Navbar.Item>|</Navbar.Item>
          <Navbar.Link href="/projectsPage">Projects</Navbar.Link>
          <Navbar.Item>|</Navbar.Item>
          <Navbar.Link href="/aboutPage">About</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    )
}