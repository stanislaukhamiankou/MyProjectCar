import Ticker from 'react-ticker'
import { Image } from "antd"
import cn from 'classnames'

import { TickerGalleryType } from '.'
import { ICar } from 'src/redux'

export const TickerGallery = ({ className, cars}: TickerGalleryType) => (
    <div className={cn('ticker-gallery', className)}>
        <Ticker speed={8}>
            {() => (
                <div className="ticker">
                    {cars.map((item: ICar) => (
                        <div className="ticker-item" key={item.id}>
                            <div className="img-car">
                                <Image src={item.img} width={item.size?.width} height={item.size?.height}/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Ticker>
    </div>
)