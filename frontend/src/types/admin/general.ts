/*-------------------------------------------*/
/*  Component
/*-------------------------------------------*/
export type Checkbox = {
  value: string | number
  label: string
  disabled?: boolean
}
export type Dropdown = {
  value: string | number
  label: string
  disabled?: boolean
}
/* 
テーブル
*/
export type HeaderItem = {
  name: string
  key: string
  sortable: boolean
}
