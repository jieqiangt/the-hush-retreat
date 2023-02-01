import "../sass/base/_base.scss";
import "../sass/base/_utilities.scss";
import "../sass/base/_typography.scss";
import type { AppProps } from "next/app";
import { ModalContextProvider } from "../store/modalContext";
import { NotificationContextProvider } from "../store/notificationContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <ModalContextProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </ModalContextProvider>
    </NotificationContextProvider>
  );
}
