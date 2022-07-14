import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import "~/styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfirmProvider } from "material-ui-confirm";
import CardCourse from "./components/CardCourse";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
            },
          },
        })
      }
    >
      <ConfirmProvider>
        <App />
      </ConfirmProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

//branch -> dev -> pull request -> merge
