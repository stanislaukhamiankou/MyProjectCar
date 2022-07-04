import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons"
import { Avatar, List, Typography, Image } from "antd"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { requestCommentsInfo } from "src/redux/comments/action"
import { getComentsInfo } from "src/redux/comments/getters"
import { ListDefault } from "src/components/_molecules"
import { COMMENTS, IconText } from "src/constants"
import { IComent } from "src/redux"
import './style.scss'

export const Comments = () => {
    const dispatch = useAppDispatch()
    const { comments } = useAppSelector(getComentsInfo)

    useEffect(() => {
        dispatch(requestCommentsInfo())
    }, [])

    return (
        <div className="comments-content">
            <Typography className="header-comments-contents">{COMMENTS.TITLE_COMMENTS}</Typography>
            <ListDefault
                itemLayout='vertical'
                size='large'
                dataSource={comments}
                pagination={{ pageSize: 2 }}
                renderItem={(item: IComent) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                        extra={
                            <Image
                                width={272}
                                src="https://www.crankandpiston.com/media/mclaren-600lt-spider-revealed/McLaren-600LT-Spider-revealed-1.jpg"
                            />
                        }
                    >
                    <List.Item.Meta
                        avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                    />
                        <Typography>{item.comment}</Typography>
                    </List.Item>
                )}
            />
        </div>
    )
}