export type ListType = {
    className?: string
    itemLayout?: ListItemLayout
    pagination?: false | PaginationConfig
    size?: ListSize
    dataSource: IComent
    renderItem?: (item: Array, index: number) => React.ReactNode
} 