"use client";
import { Inter } from "@next/font/google";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "@/components/Header";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { createContext } from "react";

const Context = createContext(GlobalStyles);

// const inter = Inter({ subsets: ["latin"] });
const Title = styled.h1`
  color: ${(props) => props.theme.colors.earthColor};
  font-family: ${(props) => props.theme.fonts.textFont};
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header></Header>
    </ThemeProvider>
  );
}
