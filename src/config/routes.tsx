import { ISwitchItem } from "react-declarative";

import BalanceView from "../pages/BalanceView";

import ErrorPage from "../pages/ErrorPage";

export const routes: ISwitchItem[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    element: BalanceView,
  },
  {
    path: "/unauthorized-page",
    element: ErrorPage,
  },
];

export default routes;
