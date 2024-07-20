import { IShoppingResult } from '../../api/shopping-result/abstractions/models/shopping-results.model';

export interface User {
    accountId: string
    wishlist: IShoppingResult[]
}