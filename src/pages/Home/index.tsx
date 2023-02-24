import { Stake } from '../../components/Stake'
import { AestheticSection } from '../../components/AestheticSection'
import { DermatologicalSection } from '../../components/DermatologicalSection'
import { SectionTitle } from '../../components/SectionTitle'

import { CaretLeft, CaretRight } from 'phosphor-react'

import DeboraImg from '../../assets/woman.svg'
import DaieneImg from '../../assets/womanSecond.svg'

export function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Stake />

      <AestheticSection />

      <DermatologicalSection />

      <div className="flex flex-1 bg-c4 justify-center">
        <div className="max-w-[1165px] w-full flex flex-col mb-32">
          <div className="my-20 flex justify-center">
            <SectionTitle title="O que as nossas clientes dizem?" />
          </div>
          <div className="flex flex-1 justify-between items-center mt-[81px] mb-10">
            <button className="hover:brightness-90 text-c8 transition-all">
              <CaretLeft size={50} />
            </button>
            <div className="p-9 bg-c10 rounded-md flex gap-5 max-w-[451px]">
              <img src={DeboraImg} alt="mulher sorrindo" />
              <div className="flex justify-between flex-col">
                <span className="font-bold text-xl text-c21">Débora Souza</span>

                <p>
                  Really good quality, lovely packaging & delivery. Love it!
                </p>
              </div>
            </div>
            <div className="p-9 bg-c10 rounded-md flex gap-5 max-w-[451px]">
              <img src={DaieneImg} alt="mulher sorrindo" />
              <div className="flex justify-between flex-col">
                <span className="font-bold text-xl text-c21">Débora Souza</span>

                <p>
                  Really good quality, lovely packaging & delivery. Love it!
                </p>
              </div>
            </div>
            <button className="hover:brightness-90 text-c8 transition-all">
              <CaretRight size={50} />
            </button>
          </div>
          <div className="flex justify-center gap-9">
            <button className="bg-c10 w-5 h-5 rounded-full" />
            <button className="bg-c8 w-5 h-5 rounded-full" />
            <button className="bg-c10 w-5 h-5 rounded-full" />
            <button className="bg-c10 w-5 h-5 rounded-full" />
            <button className="bg-c10 w-5 h-5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
