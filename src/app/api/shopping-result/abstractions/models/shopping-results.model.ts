export interface ISerpAPIResponse {
  mean: number;
  std: number;
  lower: number;
  upper: number;
  lowest: number;
  highest: number;
  filters: any[];
  filtered_results: IResults[];
  unfiltered_results: IResults[];
}

export interface IResults {
  position: number
  title: string
  link: string
  product_link: string
  product_id: string
  serpapi_product_api: string
  number_of_comparisons?: string
  comparison_link?: string
  serpapi_product_api_comparisons?: string
  source: string
  price: string
  extracted_price: number
  best_match?: boolean
  old_price?: string
  extracted_old_price?: number
  rating?: number
  reviews?: number
  extensions: string[]
  thumbnail: string
  delivery: string
  tag?: string
  second_hand_condition?: string
  badge?: string
  alternative_price?: AlternativePrice
}

export interface AlternativePrice {
  price: string
  extracted_price: number
  currency: string
}

export interface IShoppingResult {
  imgUrl: string
  product: string
  price: string
  vendor: string
}
