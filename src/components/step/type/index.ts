/**
 * @format
 * 
 */

enum OptionType {
  default = 'default',
}

type OpitonAttr = {
  description: string
  icon: string
  title: string
  subTitle: string
  status:string
  disabled?: boolean
}

export type StepItems = {
  type: OptionType
  slotName: string
  attr: OpitonAttr
}
