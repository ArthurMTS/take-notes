import React from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { Main } from "@/components/Main";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </React.Fragment>
  );
};
