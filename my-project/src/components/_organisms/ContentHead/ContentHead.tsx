import { Typography } from 'antd'
import cn from 'classnames'

import { BLOCK_INFO_DEFAULT } from 'src/constants'
import { ContentHeadType } from '.'

export const ContentHead = ({ className }: ContentHeadType) => (
    <div className={cn('content-head', className)}>
        <Typography className="block-one">
            {BLOCK_INFO_DEFAULT.TITLE_DEFAULT}
        </Typography>
        <Typography className="block-two">
            {BLOCK_INFO_DEFAULT.SUBTITLE_DEFAULT}
        </Typography>
    </div>
)