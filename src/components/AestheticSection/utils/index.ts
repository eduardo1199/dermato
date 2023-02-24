import agulhamento from '../../../assets/agulhamento.svg'
import linfatica from '../../../assets/linfatica.svg'
import lifting from '../../../assets/lifting.svg'
import radiesse from '../../../assets/radiesse.svg'
import peeling from '../../../assets/peeling.svg'
import skin from '../../../assets/skin.svg'

import { VariantColorTitle } from '../../../types'

export const cardsAestheticContent = [
  {
    title: 'Limpeza de pele',
    description:
      'Remoção de cravos e impurezas da pele, proporcionando a renovação celular e a redução dos poros.',
    variant: VariantColorTitle.black,
    image: skin,
  },
  {
    title: 'Peeling',
    description:
      'Promove a renovação celular, de forma progressiva, estimulando a regeneração natural dos tecidos.',
    variant: VariantColorTitle.red,
    image: peeling,
  },
  {
    title: 'Radiesse',
    description:
      'Proporciona uma correção imediata de efeitos comuns do envelhecimento, como flacidez e perda de sustentação da pele.',
    variant: VariantColorTitle.black,
    image: radiesse,
  },
  {
    title: 'Lifting não invasivo',
    description:
      'Tratamento que devolve o tônus à pele e amenizar sinais de envelhecimento sem demandar internação hospitalar.',
    variant: VariantColorTitle.red,
    image: lifting,
  },
  {
    title: 'Drenagem linfática',
    description:
      'Ajuda na eliminação de toxinas, melhora o sistema imunológico, melhora a aparência de celulite.',
    variant: VariantColorTitle.black,
    image: linfatica,
  },
  {
    title: 'Microagulhamento',
    description:
      'Indicado para remover cicatrizes de acne, amenizar estrias, eliminar rugas, diminuir a flacidez da pele e prevenir a queda de cabelo.',
    variant: VariantColorTitle.red,
    image: agulhamento,
  },
]

export type CardsAestheticContent = typeof cardsAestheticContent
