export interface IAPIResponse<T> {
  data: T
  links: ILinks
  meta: IMeta
}


export interface ILinks {
  self: string
}

export interface IMeta {
  totalPages: number
}
