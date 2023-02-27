import MedicineImg from '../../assets/medicine.svg'

import * as Accordion from '@radix-ui/react-accordion'
import React from 'react'
import { CaretDown } from 'phosphor-react'

export function Instructions() {
  return (
    <div className="max-w-[1165px] w-full flex justify-between my-20">
      <div className="w-full max-w-[660px]">
        <Accordion.Root type="single" collapsible defaultValue="item-1">
          <Accordion.Item
            value="item-1"
            className="bg-c1 border border-c14 px-4 py-8"
          >
            <Accordion.Trigger className="flex items-center justify-between mb-5">
              <p>Como se preparar para a consulta</p>
              <CaretDown aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content>
              <span>
                Anote todas as suas dúvidas caso esqueça na hora da consulta.
                Deixe as unhas livres de esmaltes e o rosto limpo, sem maquiagem
                para não interferir na análise.{' '}
              </span>
            </Accordion.Content>
          </Accordion.Item>
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
