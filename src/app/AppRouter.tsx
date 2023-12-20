import { Fragment, Suspense } from "react";
import { AuthorizedRoutes, UnauthorizedRoutes } from "./AppRouter.data";
import { Route, Routes } from "react-router-dom";
import {useAppSelector} from "../hooks/useAppSelector";

export const AppRouter = () => {
  const userToken = localStorage.getItem("USER_NAME");
  const wasAuthorized = !!useAppSelector((state) => state.user.userName);
  const isAuthorized = userToken?.length || wasAuthorized

  return isAuthorized ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {AuthorizedRoutes.map(({ element, path, layout }) => {
          const ComponentLayout = layout || Fragment;

          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ComponentLayout>{element}</ComponentLayout>
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {UnauthorizedRoutes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
