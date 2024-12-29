"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Robots from "./components/Robots";
import Background from "@/components/Background";

export default function About() {
  return (
    <Background>
      <Container className="relative">
        <Robots />
        <Footer theme="dark" />
      </Container>
    </Background>
  );
}
