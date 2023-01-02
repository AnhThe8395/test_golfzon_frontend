import { Fragment } from "react";
import Footer from "./footer-layout";
import Header from "./header-layout";

const GuestLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export { GuestLayout };
