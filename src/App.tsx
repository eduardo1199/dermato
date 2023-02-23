import { Stake } from './components/Stake';

export function App() {
  return (
    <div className="h-screen w-screen">
      <Stake />

      <div className="flex justify-center bg-c4">
        <div className="w-[1165px] flex flex-col gap-20">
          <div className="flex flex-1 min-h-[206px] h-[206px] mt-[-103px] items-center justify-around bg-c1 rounded-md">
            <div className="flex flex-col gap-4 items-center">
              <p className="font-bold text-5xl text-c20">+3.000</p>
              <span>Clientes satisfeitas</span>
            </div>
            <div className="border-2 border-c5 h-[72px]" />
            <div className="flex flex-col gap-4 items-center">
              <p className="font-bold text-5xl text-c20">+15</p>
              <span>Anos de experiência</span>
            </div>
            <div className="border-2 border-c5 h-[72px]" />
            <div className="flex flex-col gap-4 items-center">
              <p className="font-bold text-5xl text-c20">+10</p>
              <span>Filiais</span>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 flex-col">
            <p className="font-bold text-4xl text-c8 mb-20">Tratamentos estéticos</p>
            <div className="grid grid-cols-3 gap-16">
              <div className="w-[340px] h-[215px] bg-c1 flex items-center">
                <p className="block text-xl text-c21 font-bold">Limpeza de pele</p>
                <span>Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.</span>
              </div>
              <div className="w-[340px] h-[215px] bg-c1 flex items-center">
                <p className="block text-xl text-c21 font-bold">Limpeza de pele</p>
                <span>Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.</span>
              </div>
              <div className="w-[340px] h-[215px] bg-c1 flex items-center">
                <p className="block text-xl text-c21 font-bold">Limpeza de pele</p>
                <span>Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.</span>
              </div>
              <div className="w-[340px] h-[215px] bg-c1 flex items-center">
                <p className="block text-xl text-c21 font-bold">Limpeza de pele</p>
                <span>Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.</span>
              </div>
              <div className="w-[340px] h-[215px] bg-c1 flex items-center">
                <p className="block text-xl text-c21 font-bold">Limpeza de pele</p>
                <span>Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
