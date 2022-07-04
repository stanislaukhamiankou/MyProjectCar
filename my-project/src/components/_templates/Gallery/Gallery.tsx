import { useEffect } from "react"

import { ContentGallery, TickerGallery } from "src/components/_organisms"
import { useAppDispatch, useAppSelector } from "src/redux/hooks"
import { requestCarsInfo } from "src/redux/cars/action"
import { getCarsInfo } from "src/redux/cars/getters"
import './style.scss'

export const Gallery = () => {
    const dispatch = useAppDispatch();
    const cars = useAppSelector(getCarsInfo)

    useEffect(() => {
        dispatch(requestCarsInfo());
    }, []);

    return (
        <div className="gallery">
            <ContentGallery className="gallery-header" />
            <TickerGallery className="tiker-gallery" cars={cars} />
        </div>
)}