import {
    AboutPage,
    CommentsPage,
    ContactsPage,
    DefaultPage,
    GalleryPage,
    HomePage,
    LotteryPage,
    PersonalAreaPage,
    RegisterPage,
    SignInPage,
    UsersPage
} from "src/components/_pages";
import { routes } from "./config.routes";
import { Routes } from "../type";

export default {
    [routes.default]: {
        component: () => null
    },
    [routes.homepage]: {
        component: HomePage
    },
    [routes.about]: {
        component: AboutPage
    },
    [routes.gallery]: {
        component: GalleryPage
    },
    [routes.contacts]: {
        component: ContactsPage
    },
    [routes.comments]: {
        component: CommentsPage
    },
    [routes.signIn]: {
        component: SignInPage
    },
    [routes.register]: {
        component: RegisterPage
    },
    [routes.userslist]: {
        component: UsersPage
    },
    [routes.personalarea]: {
        component: PersonalAreaPage
    },
    [routes.lottery]: {
        component: LotteryPage
    }
} as Routes