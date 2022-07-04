export type IComent = {
    id: string
    comment: string
}

export type IComentState = {
    comments: IComent[]
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}