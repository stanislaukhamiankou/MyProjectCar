import { Button } from 'antd'
import cn from 'classnames'

import { ButtonType } from '.'

export const ButtonDefault = ({className, icon, children, onClick}: ButtonType) => (
    <div className={cn('button-default', className)}>
        <Button icon={icon} onClick={onClick}>{children}</Button>
    </div>
)