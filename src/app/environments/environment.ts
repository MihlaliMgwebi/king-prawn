export interface IEnvironment {
    production: boolean;
    host: string;
    apiUrl: string;
  }
  export const environment: IEnvironment = {
    production: false,
    host: 'https://openapi.investec.com',
    apiUrl: 'http://localhost:3000'
  }