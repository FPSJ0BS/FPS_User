import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Navigator/AppRouter.tsx";
import { GlobalProvider } from "./Context/GlobalContextProvider.tsx";
import { ToastContainer } from "react-toast";
import "../index.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Provider } from "react-redux";
import { AccessTokenProvider } from "@Context/AccessTokenContextProvider.tsx";
import store from "./store/store.ts";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <AccessTokenProvider>
            <AppRouter />
          </AccessTokenProvider>
          <ToastContainer delay={6000} position="top-center" />
        </GlobalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
