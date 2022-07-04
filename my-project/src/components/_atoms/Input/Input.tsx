import { Input } from 'antd'
import cn from 'classnames'

import { InputDefaultType } from '.'


export const InputDefault = ({className, placeholder, value, onChange, onPressEnter, onBlur}: InputDefaultType) => (
    <div className={cn('input-default', className)}>
        <Input
            autoFocus
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onPressEnter={onPressEnter}
            onBlur={onBlur}
        />
    </div>
)