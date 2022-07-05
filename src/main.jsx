import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import "~/styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";

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
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
