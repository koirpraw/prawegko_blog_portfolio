import React from 'react'
import { useTheme } from 'next-themes';
import { Button } from './ui/button'
import { SunIcon } from '@radix-ui/react-icons';
import { MoonIcon } from 'lucide-react';

function ThemeButton() {
    const { theme, setTheme } = useTheme("light");
    return (
        <Button

            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}

        </Button>
    )
}

export default ThemeButton