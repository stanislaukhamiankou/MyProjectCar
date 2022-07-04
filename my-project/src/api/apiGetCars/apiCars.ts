import { HTTP_METHODS } from "src/helper/api";
import Fetcher from "src/services/Fetcher";
import { CarsInfoData, CarsInfoResponse } from ".";

const fetcher = new Fetcher()

export const reqesCarsInfo = () => 
    fetcher.requestToReceive<CarsInfoData, CarsInfoResponse>({
        url: 'http://localhost:3000/car',
        method: HTTP_METHODS.GET,
    })