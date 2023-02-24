import StakeImg from '../../assets/destaque.svg'
import { AppointmentButton } from '../AppointmentButton'
import { Header } from '../Header'

export function Stake() {
  return (
    <div className="w-screen flex justify-center bg-c3" id="initial">
      <div className="w-[1165px]">
        <Header />

        <div className="flex items-center justify-between mb-[103px]">
          <div className="flex flex-col justify-start max-w-[540px] flex-wrap">
            <span className="font-bold text-5xl text-c8">
              A sua beleza é única, o tratamento também
            </span>
            <p className="font-normal text-xl text-c19 my-5">
              A padronização de tratamentos estéticos gera resultados
              artificiais. Por isso analisamos sua pele e realizamos apenas
              procedimentos personalizados para você.
            </p>

            <AppointmentButton title="AGENDAR CONSULTA" />
          </div>
          <div className="flex flex-1">
            <img src={StakeImg} alt="Mulher segurando um medicamento" />
          </div>
        </div>
      </div>
    </div>
  )
}
