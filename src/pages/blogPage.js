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



      <div className="flex flex-col justify-start items-center w-full space-y-10 px-12 lg:px-0  lg:mx-48 ">
        <div className="grid lg:grid-cols-2 lg:w-3/4 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl">These are my little fruits of Knowledge in my evergrowing Knowledge tree</h3>
            <p>I like to Document everything i learn and practice.
              You will notice my writings have 3 different tags: Raw, Ripening & Ripe. These indicate different stages. I keep updating my writing as i spend more time and have more insights on that topic.
              This allows me to not spend too much time on one topic & get trapped in perfectionist black hole. With That being said the writings you will come across can be raw and organic or as as ripe and complete. Pick you fruit with caution. You Have been warned !!
            </p>
            <p>I hope you can Find something sweet & juicy.🥭</p>

          </div>

        </div>



        {/* <div > */}
        {/* <SearchBar onSearch={handleSearch}/> */}
        <div className="grid lg:grid-cols-2 lg:w-3/4 ">
          {currentPosts.map((post, index) => (
            <div className="mr-6 mb-6 " key={index}>
              <Link href={`/posts/${post.slug}`} key={index} >
                <Card className="hover:shadow-xl hover:scale-105">
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

        </div>


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


