import {useState} from "react";
import styles from "../styles/Home.module.css";
import MyFooter from "@/components/Footer";
import { getAllPublished,  } from "@/lib/notion";
import Head from "next/head";
import { Container,Text,Link,Card, Spacer,Grid,Input,Button } from "@nextui-org/react";

import ResponsiveNavBar from "@/components/ResponsiveNavbar";

const PAGE_SIZE = 5; // max number of posts per page

function SearchBar({onSearch}){
  const[query,setQuery]= useState("");

  const handleQueryChange = (event)=>{
    setQuery(event.target.value);
   
  }

  const handleSearch = ()=>{
    onSearch(query);
  };

  return(
    <Grid.Container justify="center">
    <Grid xs={12} sm={6}>
      <Input
        placeholder="Search blogpost by title "
        value={query}
        onChange={handleQueryChange}
        radius="none"
        bordered
        fullWidth={true}
        // color='success'
        // style={{ backgroundColor: "white", borderColor: "gray" }}
        // onFocus={(e) => {
        //   e.target.style.borderColor = "green";
        // }}
        onBlur={(e) => {
          e.target.style.borderColor = "gray";
        }}
      />
    </Grid>
    <Grid xs={12} sm={2}>
      <Button
        auto
        type="success"
        onClick={handleSearch}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Search
      </Button>
    </Grid>
  </Grid.Container>
  )
}

 function BlogPage({posts}) {
const [currentPage, setCurrentPage]= useState(1);
const [searchQuery, setSearchQuery]= useState("");
const filteredPosts = posts.filter((post)=>{
  post.title.toLowerCase().includes(searchQuery.toLowerCase)
})
const startIndex = (currentPage-1)* PAGE_SIZE;
const endIndex = startIndex + PAGE_SIZE;
const currentPosts = posts.slice(startIndex,endIndex);

const totalPages = Math.ceil(posts.length/PAGE_SIZE);

const handlePageChange = (page)=>{
  setCurrentPage(page);
}

const handleSearch = (query)=>{
  setSearchQuery(query);
  setCurrentPage(1);
}

    if(!posts) return <h1>No posts</h1>
    return (
      <div className={styles.contentContainer}>
        <Head>
          <title>PK|Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/pkSite_favicon.png" />
        </Head>

        <ResponsiveNavBar/>

        <Container>
      
        {/* <main >
         */}
      {/* <MyNavBar/> */}
      
    
          <Spacer/>
          {/* <div>
          {posts.map((post, index) => (
            <div key={index}css={{width:"60%"}}  >
            
            <Card>
                <Card.Header>
                <Link href={`/posts/${post.slug}`}><Text css={{fontSize:"20px",color:"gray900"}}>{post.title}</Text>
               
                  
                  </Link>
                </Card.Header>
                <Card.Divider/>
                <Card.Body>
                <Text css={{color:"$gray600"}}>{post.date}</Text>
                <Text color="default">{post.description} ...</Text>
                </Card.Body>
                <Card.Footer>
                <Grid.Container gap={2} display="flex" direction="Row" justify="center">
                  <Link css={{fontSize:"12px"}} href={`/posts/${post.slug}`}>Read More..</Link>
                  </Grid.Container>
                </Card.Footer>
            </Card>

              <Spacer/>
            </div>
          ))}
          </div> */}
          <div>
          {/* <SearchBar onSearch={handleSearch}/> */}
          <Spacer/>
      {currentPosts.map((post, index) => (
        <div key={index} css={{ width: "60%" }}>
          <Card>
            <Card.Header>
              <Link href={`/posts/${post.slug}`}>
                <Text css={{ fontSize: "20px", color: "gray900" }}>
                  {post.title}
                </Text>
              </Link>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text css={{ color: "$gray600" }}>{post.date}</Text>
              <Text color="default">{post.description} ...</Text>
            </Card.Body>
            <Card.Footer>
              <Grid.Container
                gap={2}
                display="flex"
                direction="Row"
                justify="center"
              >
                <Link css={{ fontSize: "12px" }} href={`/posts/${post.slug}`}>
                  Read More..
                </Link>
              </Grid.Container>
            </Card.Footer>
          </Card>

          <Spacer />
        </div>
      ))}
      <div style={{textAlign:"center"}}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href="#"
            onClick={() => handlePageChange(page)}
            css={{ marginRight: "24px" }}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>

        {/* </main> */}
        </Container>
        
        <footer  >
        <MyFooter/>
        </footer>
       
      </div>
    )
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

    export default BlogPage;


 