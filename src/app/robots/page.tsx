"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Robots from "./components/Robots";
import Background from "@/components/Background";
// import type { Metadata } from "next";

/*
export const metadata: Metadata = {
  title: "Robots | Stuy Fusion 479",
  description:
    "Discover the robots StuyFusion has made over the years, showcasing our improvement and innovation in every competition.",
}; */

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
