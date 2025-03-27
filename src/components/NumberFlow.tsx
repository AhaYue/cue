"use client"
import NumberFlow from '@number-flow/react'
import { InView } from "@/components/InView";

import {useState} from "react";
export default function NumberFlowContent({value, suffix , delay}: {value: number, suffix?: string, delay?: number}) {

    const [initValue , setValue] = useState(0)
    const [initSuffix , setSuffix] = useState("")
    


  return <>
      <InView onEnter={() => { 
          setValue(value); 
          if (suffix) { 
              setSuffix(suffix); 
          } 
      }} delay={delay}> 
         <NumberFlow  value={initValue} suffix={initSuffix}   />
      </InView>
  </>

}