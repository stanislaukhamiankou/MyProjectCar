import { List } from "antd"
import cn from 'classnames'

import { ListType } from "."

export const ListDefault = ({className, itemLayout, dataSource, renderItem, size, pagination}: ListType) => (
    <div className={cn('list-default-default', className)}>
        <List
            itemLayout={itemLayout}
            size={size}
            dataSource={dataSource}
            renderItem={renderItem}
            pagination={pagination}
        />
    </div>
)