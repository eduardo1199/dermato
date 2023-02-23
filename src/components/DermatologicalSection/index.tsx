import ServiceImage from '../../assets/picture.svg';

import { SectionTitle } from '../SectionTitle';
import { AppointmentButton } from '../AppointmentButton';

export function DermatologicalSection() {
  return (
    <div className="flex justify-center bg-c2">
      <div className="w-[1165px] flex justify-between my-20">
        <img src={ServiceImage} alt="Médica atendendo paciênte" />

        <div className="max-w-[658px] flex flex-col gap-5 justify-center">
          <SectionTitle 
            title='Tratamentos dermatológicos'
          />

          <p className="mt-[18px]">Há alguns anos, quando se falava em tecnologia, ela era associada apenas à engenharia e à ciência. Hoje a situação é diferente: nossas clientes já desfrutam de diversos tratamentos modernos, com segurança e rápida recuperação.</p>

          <ul role="list" className="marker:text-c21 list-disc pl-5 space-y-3 text-c21">
            <li>
              Ultraformer III
            </li>
            <li>
              Laser de CO2
            </li>
            <li>
              Fotona 4D 
            </li>
            <li>
              Reveal Imager
            </li>
          </ul>

          <p>
            Nossa clínica conta com softwares, sistemas e câmeras de alta resolução que nos ajudam a diagnosticar, mapear e documentar doenças da pele, cabelos e unhas, permitindo um diagnóstico e tratamento mais preciso.
          </p>

          <AppointmentButton 
            title='Agendar Consulta'
          />
        </div>
      </div>
    </div>
  )
}