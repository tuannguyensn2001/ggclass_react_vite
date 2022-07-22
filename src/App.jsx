import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, Fragment, createElement, useEffect } from 'react';
import routes from '~/routes/routes';
import useAuthStore from '~/store/useAuthStore';
import AuthComposition from '~/components/AuthComposition';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bootstrap } from '~/packages/socket';

function App() {
    const { fetchUser, isFetchedUser } = useAuthStore((state) => state);

    useEffect(() => {
        bootstrap();
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
                                const Component = !needAuth ? item.component : AuthComposition(item.component);

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
                                    >
                                        {Boolean(item?.children) && Array.isArray(item?.children) && (
                                            <>
                                                {item.children.map((child) => (
                                                    <Route
                                                        key={child.path}
                                                        path={child.path}
                                                        element={createElement(child.component)}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </Route>
                                );
                            })}
                            )
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            )}
            {!isFetchedUser && <div>loading user</div>}
            <ToastContainer position={'bottom-center'} />
        </>
    );
}

export default App;
