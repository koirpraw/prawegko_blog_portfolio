import { CreateTheme,NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";


import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'




const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  )
}



// function ThemeChanger(){

//     const lightTheme = CreateTheme({
//         type: "light",
//         theme:{
//             // colors: {...},
//         }
//     })

//     const darkTheme = CreateTheme({
//         type: "dark",
//         theme:{
//             // colors:{...},
//         }
//     })

// }

// function ThemeSwitch(){
//     const {setTheme} = useNextTheme();
//     const {isDark, type} = useTheme();

//     return(
//         <Switch
//         checked={isDark}
//         onChange={() => setTheme(type === "dark" ? "light" : "dark")}
//         />


//     )
// }

export default ThemeSwitch;