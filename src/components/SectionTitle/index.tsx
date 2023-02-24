interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <p className="font-bold text-4xl text-c8">{title}</p>
}
