import { Avatar, List, Typography } from 'antd'
import cn from 'classnames'

import { ListDefault } from 'src/components/_molecules'
import { ListUserContentType } from '.'


export const ListUser = ({ className, data }: ListUserContentType) =>  (
    <div className={cn('list-default', className)}>
        <ListDefault 
            dataSource={data}
            renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.img} />}
                    title={item.make}
                    description={item.model}
                  />
                  <Typography>Content</Typography>
                </List.Item>
              )}
        />
    </div>
)