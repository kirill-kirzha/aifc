import { ComponentType, ReactNode } from "react";

export interface IRoute {
  path: string;
  element: ReactNode;
  layout?: ComponentType;
}

export enum ERoutes {
  "MAIN" = "/",
  "AUTHORIZATION" = `/authorization`,
  "APPOINTMENT" = "/appointment",
}
