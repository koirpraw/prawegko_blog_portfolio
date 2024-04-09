import { useState } from "react";
import styles from "../styles/Home.module.css";
import { getAllPublished, } from "@/lib/notion";
import Head from "next/head";
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"

import Link from 'next/link';
import { Button } from "@/components/ui/button";



const PAGE_SIZE = 5; // max number of posts per page

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleQueryChange = (event) => {
//     setQuery(event.target.value);

//   }

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <Grid.Container justify="center">
//       <Grid xs={12} sm={6}>
//         <Input
//           placeholder="Search blogpost by title "
//           value={query}
//           onChange={handleQueryChange}
//           radius="none"
//           bordered
//           fullWidth={true}
//           // color='success'
//           // style={{ backgroundColor: "white", borderColor: "gray" }}
//           // onFocus={(e) => {
//           //   e.target.style.borderColor = "green";
//           // }}
//           onBlur={(e) => {
//             e.target.style.borderColor = "gray";
//           }}
//         />
//       </Grid>
//       <Grid xs={12} sm={2}>
//         <Button
//           auto
//           type="success"
//           onClick={handleSearch}
//           style={{ backgroundColor: "green", color: "white" }}
//         >
//           Search
//         </Button>
//       </Grid>
//     </Grid.Container>
//   )
// }

function BlogPage({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = posts.filter((post) => {
    post.title.toLowerCase().includes(searchQuery.toLowerCase)
  })
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }

  if (!posts) return <h1>No posts</h1>
  return (
    <>
      <Head>
        <title>PK|Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pkSite_favicon.png" />
      </Head>



      <div className="flex flex-col justify-center items-center w-full space-y-4 px-12 lg:px-0  lg:mx-48 ">



        {/* <div > */}
        {/* <SearchBar onSearch={handleSearch}/> */}

        {currentPosts.map((post, index) => (
          <div className="hover:shadow-xl hover:scale-105 lg:w-3/4 space-y-6" key={index}>
            <Link href={`/posts/${post.slug}`} key={index} >
              <Card className="gap-6">
                <CardHeader>

                  <CardTitle>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {post.date}
                  <CardDescription>
                    {post.description} ...
                  </CardDescription>
                </CardContent>
                <CardFooter >


                  Read More..


                </CardFooter>
              </Card>
            </Link>


          </div>
        ))}
        <div className="text-center space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, index) => (
            <Button key={index} onClick={() => handlePageChange(page)}>{page}</Button>


          ))}
        </div>
      </div>


      {/* </div> */}

    </>
  )
}

export const getStaticProps = async () => {
  const data = await getAllPublished()
  return {
    props: {
      posts: data
    },
    revalidate: 60
  };


}

export default BlogPage;


