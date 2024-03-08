import {Card,Col,Link} from '@nextui-org/react'
import React from 'react'


 const ProjectCard = ({projectTitle,publishedDate,imageURL,projectLink}) => (
    

    <Card css={{mw:"400px",margin:"1REM",borderRadius:"10px"}}
    isHoverable
    isPressable
    
    >
  {/* <Card.Header>
  
  </Card.Header> */}
  
 
    {/* <Card.Body> */}
    <Card.Image
                src={imageURL}
                objectFit="contain"
                width="100%"
                height={340}
                
              />
              
    {/* </Card.Body> */}
    <Card.Footer>
    <Col css={{textAlign:"center"}}>
    <Link href={{projectLink}}><h5>{projectTitle}</h5></Link>
    {/* <p>{projectDescription}</p> */}
    <p style={{color:"gray"}}>published: {publishedDate}</p>
    </Col>
   
    </Card.Footer>
    
  </Card>
  )

  export default ProjectCard;




  