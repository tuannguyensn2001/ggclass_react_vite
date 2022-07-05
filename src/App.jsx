import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, Fragment, createElement } from "react";
import routes from "~/routes/routes";

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Routes>
          {routes.map((item) => {
            const DefaultLayout = Fragment;
            const Component = item.component;
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
  );
}

export default App;
