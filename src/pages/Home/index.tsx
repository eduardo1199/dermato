import { Stake } from '../../components/Stake'
import { AestheticSection } from '../../components/AestheticSection'
import { DermatologicalSection } from '../../components/DermatologicalSection'
import { ClientsFeedback } from '../../components/ClientsFeedback'
import { Instructions } from '../../components/Instructions'

export function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Stake />

      <AestheticSection />

      <DermatologicalSection />

      <div className="flex flex-1 bg-c1 justify-center">
        <Instructions />
      </div>

      <div className="flex flex-1 bg-c4 justify-center">
        <ClientsFeedback />
      </div>
    </div>
  )
}
