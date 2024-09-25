import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
