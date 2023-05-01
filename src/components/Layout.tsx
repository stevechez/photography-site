import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MyApp({ children }: Props) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
