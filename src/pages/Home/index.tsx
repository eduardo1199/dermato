import { Stake } from '../../components/Stake';
import { AestheticSection } from '../../components/AestheticSection';
import { DermatologicalSection } from '../../components/DermatologicalSection';

export function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Stake />

      <AestheticSection  />

      <DermatologicalSection />
    </div>
  )
}