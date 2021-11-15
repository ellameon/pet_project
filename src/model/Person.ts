export interface Person {
    id: string
    name: string
    surname: string
    phone: string
    address: string
    email?: string
    sex?: Sex
}

export type Sex = "male" | "female"

