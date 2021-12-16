/**
 * @format
 * @description: 单选框对外暴露的方法
 */

export interface ActiveMethods {
  blur: () => void
  focus: () => void
}

enum OptionType {
  default = 'default',
  button = 'button',
}

type OpitonAttr = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioItem = {
  type: OptionType
  slotName: string
  attr: OpitonAttr
}
