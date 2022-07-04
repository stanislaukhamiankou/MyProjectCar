import { Carousel, Col, Row } from 'antd'

import { carouselArrows } from 'src/constants/CarouselArrows'
import { CAROUSEL_INFO_CAR } from 'src/constants'
import { CarouselCarType } from '.'

export const CarouselCar = ({car}: CarouselCarType) => {
    return (
        <>
            <Row justify="center">
                <Col span={23}>
                    <Carousel arrows {...carouselArrows}>
                        <div>
                            <h3 className="item-carousel-car">
                                {CAROUSEL_INFO_CAR.TYPE_OF_FUEL}
                                {car?.fuel_type}
                            </h3>
                        </div>
                        <div>
                            <h3 className="item-carousel-car">
                                {CAROUSEL_INFO_CAR.CONSUMPTION_IN_THE_CITY}
                                {car?.min_city_mpg} - {car?.max_city_mpg}
                            </h3>
                        </div>
                        <div>
                            <h3 className="item-carousel-car">
                                {CAROUSEL_INFO_CAR.CONSUMPTION_OUTSIDE_THE_CITY}
                                {car?.min_hwy_mpg} - {car?.max_hwy_mpg}
                            </h3>
                        </div>
                        <div>
                            <h3 className="item-carousel-car">
                                {CAROUSEL_INFO_CAR.NUMBER_OF_CYLINDRES}
                                {car?.cylinders}
                            </h3>
                        </div>
                        <div>
                            <h3 className="item-carousel-car">
                                {CAROUSEL_INFO_CAR.DRIVE_UNIT}
                                {car?.drive}
                            </h3>
                        </div>
                        <div>
                            <h3 className="item-carousel-car">
                                {CAROUSEL_INFO_CAR.AUTO_MANUFACTURER}
                                {car?.make}</h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}