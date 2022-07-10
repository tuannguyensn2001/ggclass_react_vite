import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, Fragment, createElement, useEffect } from "react";
import routes from "~/routes/routes";
import useAuthStore from "~/store/useAuthStore";
import AuthComposition from "~/components/AuthComposition";

function App() {
  const { fetchUser, isFetchedUser } = useAuthStore((state) => state);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {isFetchedUser && (
        <Suspense fallback={<div>loading</div>}>
          <BrowserRouter>
            <Routes>
              {routes.map((item) => {
                const DefaultLayout = item?.layout || Fragment;
                const needAuth = item.private;
                const Component = !needAuth
                  ? item.component
                  : AuthComposition(item.component);

                return (
                  <Route
                    path={item.path}
                    key={item.path}
                    element={
                      <>
                        <DefaultLayout>
                          <Component />
                        </DefaultLayout>
                      </>
                    }
                  />
                );
              })}
              )
            </Routes>
          </BrowserRouter>
        </Suspense>
      )}
      {!isFetchedUser && <div>loading user</div>}
    </>
  );
}

export default App;
