import { SectionNameType, useSectionInViewProp } from "@/app/commonTypes";
import { useActiveSectionContext } from "@/context/activeSection-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView (SectionName : SectionNameType , threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold 
      });
      const { setActiveSection , timeOfLastClick } = useActiveSectionContext();
      // If the user has clicked on a new section since last checking, update active section immediately
      useEffect(() =>{
        if (inView && Date.now() - timeOfLastClick > 1000) {setActiveSection(SectionName)}
      } , [inView , setActiveSection , timeOfLastClick , SectionName]);
      return {
        ref , 
      }

}