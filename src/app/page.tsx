"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Game from "./components/Game";
import Sponsors from "./components/Sponsors";
import Background from "@/components/Background";

export default function Landing() {
  return (
    <Background>
      <Container className="relative">
        <Hero />
        <Sponsors />
        <About />
        <Game />
        <Footer theme="dark" />
      </Container>
    </Background>
  );
}
