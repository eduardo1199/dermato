import { SectionAesthetic } from './components/SectionAesthetic';
import { Stake } from './components/Stake';

export function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Stake />

      <SectionAesthetic  />

      <div className="flex justify-center bg-c2">
        <div className="w-[1165px] flex flex-col gap-20">
          
        </div>
      </div>
    </div>
  )
}
