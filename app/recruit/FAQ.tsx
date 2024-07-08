'use client'
import React from "react"
import {Accordion, AccordionItem} from "@nextui-org/accordion";

const FAQ = () => {
    return (
      <div className="bg-gradient-to-b from-gray-5 to-primary-0 flex flex-col justify-center items-center text-center h-screen py-40">
        <div>
          <p className="text-gray-90 text-[32px] font-semibold">자주 묻는 질문</p>
          <p className="text-primary-40 text-[18px] mt-1">FAQ</p>
        </div>
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            dsfsd
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            sdf
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            sfd
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
  
  export default FAQ;
  