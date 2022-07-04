import { Typography } from 'antd'
import cn from 'classnames'

import { BLOCK_INFO_GALLERY } from 'src/constants'
import { ContentGalleryType } from '.'

export const ContentGallery = ({ className }: ContentGalleryType) => (
    <div className={cn('content-gallery', className)}>
        <Typography className="gallery">
            {BLOCK_INFO_GALLERY.TITLE_GALLERY}
        </Typography>
        <Typography className="gallery-signature">
            {BLOCK_INFO_GALLERY.SUBTITLE_GALLERY}
        </Typography>
    </div>
)