import {AccountIdType} from "../../../../abstractions/types";

// GET {{host}}/za/pb/v1/accounts
export interface IAccount {
  accountId: AccountIdType
  accountNumber: string
  accountName: string
  referenceName: string
  productName: string
  kycCompliant: boolean
  profileId: string
}

// GET {{host}}/za/pb/v1/accounts/:accountId/balance
export interface IAccountBalance {
  accountId: AccountIdType
  currentBalance: number
  availableBalance: number
  currency: string
}

// POST {{host}}/za/pb/v1/accounts/:accountId/transfermultiple
export interface ITransferList {
  beneficiaryAccountId: string
  amount: string
  myReference: string
  theirReference: string
}

