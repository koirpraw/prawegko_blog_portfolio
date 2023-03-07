import { Navbar,Link } from '@nextui-org/react';

export default function ResponsiveNavBar() {
//   const collapseItems = ['Home', 'Blog', 'Projects', 'About'];
  return (
    <Navbar  variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <p style={{fontSize:"2REM"}}> PK </p>
        
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="highlight"
      >
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Item>|</Navbar.Item>
        <Navbar.Link href="/blogPage">Blog</Navbar.Link>
        <Navbar.Item>|</Navbar.Item>
        {/* <Navbar.Link href="/projectsPage">Projects</Navbar.Link>
        <Navbar.Item>|</Navbar.Item> */}
        <Navbar.Link href="aboutPage">About</Navbar.Link>
      </Navbar.Content>
      {/* <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? '$error' : '',
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse> */}
      <Navbar.Collapse disableAnimation>
        <Navbar.CollapseItem activeColor="primary">
            <Link
                color="inherit"
                css={{
                minWidth: '100%',
                }}
                href="/"
            >
                Home
            </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem activeColor="primary">
            <Link
                color="inherit"
                css={{
                minWidth: '100%',
                }}
                href="/blogPage"
            >
                Blog
            </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem activeColor="primary">
            <Link
                color="inherit"
                css={{
                minWidth: '100%',
                }}
                href="/projectsPage"
            >
                Projects
            </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem activeColor="primary">
            <Link
                color="inherit"
                css={{
                minWidth: '100%',
                }}
                href="/aboutPage"
            >
                About
            </Link>
        </Navbar.CollapseItem>
        </Navbar.Collapse>


                

                



    </Navbar>
  );
}
