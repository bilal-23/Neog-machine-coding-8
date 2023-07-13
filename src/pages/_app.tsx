import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MeetupContextProvider } from "@/context/meetup-provider";
import Nav from "@/components/nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeetupContextProvider>
      <Nav />
      <Component {...pageProps} />
    </MeetupContextProvider>
  );
}
