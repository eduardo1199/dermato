export function SummaryContact() {
  return (
    <div className="max-w-[1165px] w-full flex flex-row justify-between my-20">
      <span className="text-3xl font-bold text-c1">DERMATO</span>
      <div>
        <p className="text-2xl font-bold text-c1">CONTATO</p>
        <div className="flex flex-col mt-8 gap-3">
          <span className="font-bold text-xl text-c1">+55 21 9999-9999</span>
          <span className="font-bold text-xl text-c1">
            contato@dermato.com.br
          </span>
          <div className="h-[1px] bg-c1" />
          <span className="font-bold text-xl text-c1">
            Rua São Paulo, 45 - Americana
          </span>
          <span className="font-bold text-xl text-c1">Americana - SP</span>
          <div className="h-[1px] bg-c1" />
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-c1">INFORMAÇÕES</p>
        <div className="flex flex-col mt-8 gap-3">
          <span className="font-bold text-xl text-c1">Procedimentos</span>
          <span className="font-bold text-xl text-c1">Contato</span>
          <span className="font-bold text-xl text-c1">Termos e Condições</span>
        </div>
      </div>
    </div>
  )
}
