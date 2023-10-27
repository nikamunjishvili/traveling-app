import React, { ReactNode } from "react";
import Header from "../_atoms/Header";
import Footer from "../_atoms/Footer";
import styled from "styled-components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default MainLayout;
