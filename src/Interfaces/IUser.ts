export interface IUser {
    uuid: string
    id?: string
    name: string
    email: string
    isAdm?: boolean
    createdAt?: Date
    updatedAt: Date
    isActive?: boolean
}

