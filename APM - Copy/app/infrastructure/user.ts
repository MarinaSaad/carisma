export interface IUser {
    name: string,
    age: number,
    address?: {
        city: string,
        country: string
    }
}