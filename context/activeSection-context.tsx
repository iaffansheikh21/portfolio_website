"use client"
import { ActiveSectionContextProviderType, SectionNameType } from "@/app/commonTypes";
import React, { createContext, useState , useContext } from "react";
import { ActiveSectionContextType } from "@/app/commonTypes";

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }:ActiveSectionContextProviderType
) {
  const [activeSection, setActiveSection] = useState<SectionNameType>("Home");

  const [timeOfLastClick , setTimeOfLastClick]   = useState(0);  // we need to keep track of this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}