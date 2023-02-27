import MedicineImg from '../../assets/medicine.svg'

import * as Accordion from '@radix-ui/react-accordion'

import { ItemContent } from './types'
import { AccordionItem } from './AccordionItem'

const InstructionsCollapse: ItemContent[] = [
  {
    title: 'Como se preparar para a consulta',
    description:
      'Anote todas as suas dúvidas caso esqueça na hora da consulta. Deixe as unhas livres de esmaltes e o rosto limpo, sem maquiagem para não interferir na análise.',
    item: 'item-1',
  },
  {
    title: 'Com que frequência devo ir ao dermatologista?',
    description: null,
    item: 'item-2',
  },
  {
    title: 'Preciso de encaminhamento para consulta',
    description: null,
    item: 'item-3',
  },
  {
    title: 'O que um dermatologista faz em uma consulta?',
    description: null,
    item: 'item-4',
  },
  {
    title: 'O que devo esperar de uma análise de pele?',
    description: null,
    item: 'item-5',
  },
]

export function Instructions() {
  return (
    <div className="max-w-[1165px] w-full flex justify-between my-20">
      <div className="w-full max-w-[660px]">
        <Accordion.Root
          type="single"
          collapsible
          defaultValue="item-1"
          className="flex flex-col gap-5"
        >
          {InstructionsCollapse.map((item) => {
            return (
              <AccordionItem
                description={item.description}
                item={item.item}
                title={item.title}
                key={item.title}
              />
            )
          })}
        </Accordion.Root>
      </div>
      <img
        src={MedicineImg}
        alt="medicamento baseado em coco"
        className="w-[424px] h-[522px]"
      />
    </div>
  )
}
