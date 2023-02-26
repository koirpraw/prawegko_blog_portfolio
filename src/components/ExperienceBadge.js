import { Badge, Container,Spacer,Text } from '@nextui-org/react';


const ExperienceBadge = ({ icon, title }) => {
  return (
    <Badge
    //   color="success"
      variant={"bordered"}
      css={{ mr: '0.1rem',backgroundColor:"white",shadow:"$sm" }}>
        <Container  css={{display:"flex",alignItems:"center", direction:"row"}}>     
        {icon}
        <Spacer x={0.25}/>
        <Text>{title}</Text>
        </Container>
     
        
    </Badge>
  );
}

export default ExperienceBadge;