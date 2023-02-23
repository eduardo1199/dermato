import { cardsAestheticContent } from "./utils"
import { AestheticServicesCard } from "../AestheticServicesCard"
import { SectionTitle } from "../SectionTitle"

export function SectionAesthetic() {
  return (
    <div className="flex justify-center bg-c4">
      <div className="w-[1165px] flex flex-col gap-20">
        <div className="flex flex-1 min-h-[206px] h-[206px] mt-[-103px] items-center justify-around bg-c1 rounded-md">
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-5xl text-c20">+3.000</p>
            <span className="font-bold text-xl text-c19">Clientes satisfeitas</span>
          </div>
          <div className="border-2 border-c5 h-[72px]" />
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-5xl text-c20">+15</p>
            <span className="font-bold text-xl text-c19">Anos de experiência</span>
          </div>
          <div className="border-2 border-c5 h-[72px]" />
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-5xl text-c20">+10</p>
            <span className="font-bold text-xl text-c19">Filiais</span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1 flex-col">
          <SectionTitle 
            title='Tratamentos estéticos'
          />
          <div className="grid grid-cols-3 gap-16 mb-[107px] mt-16">
            {cardsAestheticContent.map((card) => {
              return (
                <AestheticServicesCard 
                  key={card.title}
                  description={card.description}
                  title={card.title}
                  variant={card.variant}
                  image={card.image}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}