import {ERoutes, IRoute} from "./AppRouter.types";
import {AuthorizationPage} from "../components/AuthorizationPage/AuthorizationPage";
import {MainPage} from "../components/MainPage/MainPage";
import {AppointmentPage} from "../components/AppointmentPage/AppointmentPage";

export const AuthorizedRoutes: IRoute[] = [
  {
    path: ERoutes.MAIN,
    element: <MainPage />,
  },
  {
    path: ERoutes.APPOINTMENT,
    element: <AppointmentPage />,
  },
  {
    path: ERoutes.AUTHORIZATION,
    element: <AuthorizationPage />,
  },
];

export const UnauthorizedRoutes: IRoute[] = [
  {
    path: ERoutes.MAIN,
    element: <AuthorizationPage />,
  },
];
