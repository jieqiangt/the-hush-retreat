import "../sass/base/_base.scss";
import "../sass/base/_utilities.scss";
import "../sass/base/_typography.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
