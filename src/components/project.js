import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Avatar, Button ,Text,Grid,Link} from "@nextui-org/react";

 function Project(){
    return(
      <div style={{width:"300px", height:"120px"}}>
<Card>
  <Card.Header>
    <Text h5>2022</Text>
    <h3>prawegko.dev</h3>
  </Card.Header>
  <Card.Divider/>
  <Card.Body>
    <Text color="default">This is a project description</Text>
  </Card.Body>
  <Card.Footer>
    <Grid.Container gap={2} display="flex" direction="Row" justify="center">
      <Link css={{fontSize:"12px"}} href="https://prawegko.dev/" >Read More..</Link>
      
    </Grid.Container>
  </Card.Footer>
</Card>
        </div>
    )
}

export default Project;