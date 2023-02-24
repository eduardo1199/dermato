import { Link } from './Link'

export function Header() {
  return (
    <div className="flex items-center justify-between py-6">
      <p className="font-bold text-2xl text-c6">DERMATO</p>
      <div className="flex items-center gap-12">
        <Link sectionName="Início" />
        <Link sectionName="Serviços" />
        <Link sectionName="Sobre" />
        <Link sectionName="Contato" />
      </div>
    </div>
  )
}
