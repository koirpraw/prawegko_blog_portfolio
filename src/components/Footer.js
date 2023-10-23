import React from 'react'
import { Container, Grid, Spacer,Divider } from '@nextui-org/react'
import ThemeSwitch from './ThemeSwitch';


function MyFooter(){
    return(
      
      <div >

      <Divider css={{width:"100%"}}/>
      
      <Grid.Container gap={0.5} display="flex" direction="Column" 
  //  justify="center" alignItems="center" alignContent="center"
   >
 
   <Spacer y={0.5}/>
  
  
    <Grid.Container gap={1.5} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
  <Grid.Container gap={1.5} display="flex" direction="Row" justify='center'>
  <Grid>
      <ThemeSwitch/>
    </Grid>
  </Grid.Container>
    
    <Grid>
    <p>Made with ❤️ by Praweg</p>
    </Grid>
    {/* <Grid>
    <p>NewsLetter </p>
    </Grid> */}
    {/* <Grid>
    <p>☕︎ Ko-Fi </p>
    </Grid> */}
    {/* <Grid>
    <p>Patreon </p>
    </Grid>
   
      <p></p> */}
      
      </Grid.Container>
      {/* <Grid.Container gap={1.5} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
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
      
      </Grid.Container> */}
      {/* <Grid.Container gap={1.5} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
    <Grid>
    <p>@Copyright 2023</p>
    </Grid>
    </Grid.Container> */}
      </Grid.Container>
    

      </div>
     
     
    )
}


export default MyFooter;