
"use client"
import React from 'react'
import { useState , useEffect  , createContext , useContext} from 'react';
import { themeConextType, themeType } from '@/app/commonTypes';
import { ThemeContextProviderProps } from '@/app/commonTypes';


const ThemeContext = createContext<themeConextType | null>(null);


export default function ThemeContextProvider({children} : ThemeContextProviderProps) {
    const [theme, setTheme] = useState<themeType>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme") as themeType | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
   <ThemeContext.Provider value={{theme , toggleTheme}}>
    {children}
   </ThemeContext.Provider>
  )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === null){
        throw new Error('useTheme must be used within the ThemeContext');
    }
    return context;
}
