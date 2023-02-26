import React from 'react'
import { Container, Grid, Spacer } from '@nextui-org/react'


function MyFooter(){
    return(
       <footer>
     <Grid.Container gap={1} display="flex" direction="Column" justify="center" alignItems="center" alignContent="center">
      <Grid.Container gap={2} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
      <Grid>
      <p>Made with ❤️ by Praweg Koirala </p>
      </Grid>
      <Grid>
      <p>NewsLetter </p>
      </Grid>
      <Grid>
      <p>☕︎ Ko-Fi </p>
      </Grid>
      <Grid>
      <p>Patreon </p>
      </Grid>
     
        <p></p>
        
        </Grid.Container>
        <Grid.Container gap={2} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
      <Grid>
      
      
      <p> 🌐 Next.js </p>
    
      
      </Grid>
      <Grid>
      <p>Notion </p>
      </Grid>
      <Grid>
      <p>Vercel </p>
      </Grid>
   
     
        <p></p>
        
        </Grid.Container>
        <Grid.Container gap={2} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
      <Grid>
      <p>@Copyright 2023</p>
      </Grid>
      </Grid.Container>
        </Grid.Container>
       </footer>
    )
}


export default MyFooter;