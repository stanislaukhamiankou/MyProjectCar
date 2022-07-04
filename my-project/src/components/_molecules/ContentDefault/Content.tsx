import cn from 'classnames'

import { ContentType } from ".";

export const ContentDefault = ({ className, children }: ContentType) => (
    <div className={cn('content-default', className)}>
        {children}
    </div>
)