export interface IUser {
    id: number
    username: string
    email: string
    password: string
    role: string
  }
  
  export interface IUserState {
    users: IUser[]
    isLoading: boolean
    isLoaded: boolean
    error: any | null
  }