import { WEB_STORAGE } from "src/constants";

export const mapState = { center: [52.448397, 30.996864], zoom: 18 }

export const IMG_PROFILE = 'https://yt3.ggpht.com/a/AATXAJwAVAEZMIpaHYoqRb9cqorllMsrfhXpaLWabSMfAw=s900-c-k-c0xffffffff-no-rj-mo'

export const getLocalAccessToken = () => localStorage.getItem(WEB_STORAGE.ACCESS_TOKEN);