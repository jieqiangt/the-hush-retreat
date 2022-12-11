import "../sass/base/_base.scss";
import "../sass/base/_utilities.scss";
import "../sass/base/_typography.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
