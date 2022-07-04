import { List, Typography } from 'antd'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestCarsInfo } from 'src/redux/cars/action'
import { ListUser } from 'src/components/_organisms'
import { getCarsInfo } from 'src/redux/cars/getters'
import { MENU_ITEM } from 'src/constants'
import './style.scss'
import { VirtualList } from '@ishikawa_masashi/react-virtual-list'

export const UsersList  = () => {
    const dispatch = useAppDispatch()
    const cars = useAppSelector(getCarsInfo)

    useEffect(() => {
        dispatch(requestCarsInfo())
    }, []);

    return (
        <div className="users-list">
            <Typography className="user-list-header">
                {MENU_ITEM.ITEM_USERS_LIST}
            </Typography>
            <VirtualList
                width='100%'
                height={500}
                itemCount={cars.length}
                itemSize={4}
                renderItem={({index, style}) =>
                    <ListUser
                        data={cars} 
                    />
                }
            />
        </div>
    )
}