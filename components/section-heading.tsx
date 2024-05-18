import { sectionHeadingProp } from '@/app/commonTypes';
import React from 'react';


export default function SectionHeading(props : sectionHeadingProp) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{props.title}</h2>
  )
}