import { YMaps, Map } from 'react-yandex-maps'
import cn from 'classnames'

import { mapState } from 'src/helper/helper'
import { MapDefaultType } from '.'

export const MapDefault = ({className, classNameMap}: MapDefaultType) => {
    
    return (
        <div className={cn('map-default', className)}>
            <YMaps>
                <Map state={mapState} className={classNameMap} />
            </YMaps>
        </div>
    )
}