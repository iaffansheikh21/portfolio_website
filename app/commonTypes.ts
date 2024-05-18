import { links, projectsData } from "@/lib/data"
import React from "react";

export type sectionHeadingProp = {
    title : string,
}

// Project Data Type
export type projectProps = (typeof projectsData)[number];

// SectionName Type
export type SectionNameType = typeof links[number]["name"];

export type ActiveSectionContextProviderType = {
    children : React.ReactNode;
}

export type ActiveSectionContextType = {
    activeSection : SectionNameType,
    setActiveSection : React.Dispatch<React.SetStateAction<SectionNameType>>,
    timeOfLastClick : number,
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>,
}
export type useSectionInViewProp = {
    name: SectionNameType;
}

// Email Type 

export type contactFormEmailProps = {
    message : string,
    senderEmail: string;
}

export type themeType = "light" | "dark";

export type ThemeContextProviderProps = {
    children : React.ReactNode;
}

export type themeConextType = {
    theme : themeType,
    toggleTheme : () => void,
}
    
