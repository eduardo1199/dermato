interface LinkProps {
  sectionName: string
}

export function Link({ sectionName }: LinkProps) {
  return <a className="font-bold text-2xl text-c6 hover:brightness-110 transition-all cursor-pointer">{sectionName}</a>
}