import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'

import { ItemContent } from '../types'

interface AccordionItemProps extends ItemContent {}

export function AccordionItem(props: AccordionItemProps) {
  return (
    <Accordion.Item
      value={props.item}
      className="bg-c1 border border-c14 px-5 py-4 group"
    >
      <Accordion.Trigger className="flex items-center justify-between w-full">
        <p className="text-xl font-bold text-c21">{props.title}</p>
        <CaretDown
          aria-hidden
          size={30}
          className="text-c8 group-data-[state=open]:rotate-180 transition-transform duration-500"
        />
      </Accordion.Trigger>
      <Accordion.Content className="mt-5">
        <span className="text-c18 text-lg font-normal">
          {props.description}
        </span>
      </Accordion.Content>
    </Accordion.Item>
  )
}
