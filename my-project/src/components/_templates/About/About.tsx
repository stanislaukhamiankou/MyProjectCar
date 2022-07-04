import { Typography, Image } from 'antd'
import { useEffect } from 'react'

import { requestCarsInfo, requestdeleteUsers } from 'src/redux/cars/action'
import { clearSetCar, setCar } from 'src/redux/reducers/carSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { AboutButtons } from 'src/components/_organisms'
import { CarouselCar } from 'src/components/_molecules'
import { getLocalAccessToken } from 'src/helper/helper'
import { getCarsInfo } from 'src/redux/cars/getters'
import { getCarInfo } from 'src/redux/car/getters'
import { CAROUSEL_INFO_CAR } from 'src/constants'
import { ICar } from 'src/redux'
import './style.scss'

export const About = () => {
    const dispatch = useAppDispatch()
    const tok = getLocalAccessToken()
    const cars = useAppSelector(getCarsInfo)
    const { car } = useAppSelector(getCarInfo)

    useEffect(() => {
        dispatch(requestCarsInfo());
    }, []);

    const getCar = (carInfo: ICar) => {
        dispatch(setCar(carInfo))
    }

    const deleteUserID = (id: number) => {
        dispatch(requestdeleteUsers(id))
        dispatch(clearSetCar())
    }

    return (
        <div className="about">
            <nav className="nav-car-ablout">
                <ul className="menu">
                    {Array.isArray(cars) ? cars.map((item: ICar) => 
                        <li key={item.id}>
                            <a href="#!" onClick={(e) => getCar(item)}>
                                {item.model.toUpperCase()}
                            </a>
                        </li>
                    ) : []}
                </ul>
            </nav>
            <div className="about-content">
                <div className="img-car">
                    <Image 
                        src={car ? car.img : 
                        'https://www.gtspiritmedia.com/gtspirit/uploads/2013/12/BMW-M6-2.jpg'
                    }/>
                </div>
                <div className="about-content-right">
                    <Typography className="header-iformation-car">
                        {CAROUSEL_INFO_CAR.ITEM_ABOUT_HEADER}
                    </Typography>
                    <CarouselCar car={car}/>
                    {tok !== null ? ( 
                        <AboutButtons
                            className="interaction-with-the-car"
                            classNamModal="form-add-car-about"
                            functionDelete={(e) => deleteUserID(car.id)}
                        />
                    ) : ( <div/> )}
                </div>
            </div>
        </div>
    )
}