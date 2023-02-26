import React from "react";
import { Card, Text } from "@nextui-org/react";

function SkillsCard({ skill, percentage ,title}) {
  return (
    <Card
    css={{width:"240px"}}
    >
<Card.Header>
<Text css={{textAlign:"center"}} h3 >{title}</Text>
</Card.Header>
<Card.Divider/>
<Card.Body>
<li>

{skill} {percentage
    ? `(${percentage})`
    : ""}


</li>

</Card.Body>



<Card.Body>

</Card.Body>
</Card>
  );
}

export default SkillsCard;