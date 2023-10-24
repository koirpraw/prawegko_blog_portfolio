import { saveAs } from "file-saver";
import { Button } from "@nextui-org/react";




export const DownloadResume = () => {

  const handleDownload = ()=>{
    const fileUrl = "https://pk-web-assets.s3.amazonaws.com/pk_resumeSample2.png";
    const fileName = "pk_resumeSample2.png";
    saveAs(fileUrl, fileName);
  }


  return (
    <Button shadow
    color="gradient"
    // variant="bordered"
    // style={{backgroundColor: "green", color: "white" ,width:"50%", textAlign:"center"}}
    onClick={handleDownload}
    
    >
      View/Download Resume
    </Button>
  )

}
