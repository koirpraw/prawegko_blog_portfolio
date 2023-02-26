import {Card,Col} from '@nextui-org/react'
import React from 'react'


 const ProjectCard = ({projectTitle,publishedDate,imageURL}) => (
    

    <Card css={{mw:"400px"}}
    isHoverable
    isPressable
    >
  {/* <Card.Header>
  
  </Card.Header> */}
  
 
    {/* <Card.Body> */}
    <Card.Image
                src={imageURL}
                objectFit="cover"
                width="100%"
                height={340}
              />
              
    {/* </Card.Body> */}
    <Card.Footer>
    <Col css={{textAlign:"center"}}>
    <h5>{projectTitle}</h5>
    {/* <p>{projectDescription}</p> */}
    <p style={{color:"gray"}}>published: {publishedDate}</p>
    </Col>
   
    </Card.Footer>
  </Card>
  )

  export default ProjectCard;