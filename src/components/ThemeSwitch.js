


import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Grid, Container } from '@nextui-org/react'




const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Grid.Container gap={1} display="flex" direction="Row" justify="center" alignItems="center" alignContent="center">
        Current Theme: {type}&nbsp;
        <Switch
          iconOn={<span>🌙</span>}
          iconOff={<span>☀️</span>}
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </Grid.Container>
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