import { IShoppingResult } from '../../api/shopping-result/abstractions/models/shopping-results.model';

export interface AlternativePrice {
    price: string
    extracted_price: number
    currency: string
}

export interface User {
    accountId: string
    wishlist: IShoppingResult[]
}