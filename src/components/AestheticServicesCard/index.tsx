import { ReactNode } from 'react'
import { VariantColorTitle } from '../SectionAesthetic/utils/index'

interface AestheticServicesCardProps {
  title: string
  description: string
  variant: VariantColorTitle
  image: string 
}

export function AestheticServicesCard({ description, title, variant, image }: AestheticServicesCardProps) {
  return (
    <div className="w-[340px] h-[215px] bg-c1 flex flex-col rounded-md p-5">
      <p className={`text-xl text-${variant} font-bold flex items-center gap-2`}>
        <img src={image} className="min-w-max" />
        {title}
      </p>
      <span className={`text-base text-c21 font-normal text-end`}>{description}</span>
    </div>
  )
}