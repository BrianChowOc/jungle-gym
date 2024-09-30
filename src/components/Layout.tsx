import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="my-lg:h-[60px] md:h-12 h-10 "></div>
      <main className="grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
