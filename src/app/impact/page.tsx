"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import List from "./components/List";
import Background from "@/components/Background";
// import type { Metadata } from "next";

/*
export const metadata: Metadata = {
  title: "Impact | Stuy Fusion 479",
  description:
    "StuyFusion is committed to giving back to the community through outreach that inspires the next generation of engineers and problem-solvers. We have interacted with almost 1500 people in both local and international communities over the past year. Learn more about our impact.",
};*/

export default function Outreach() {
  return (
    <Background>
      <Container className="relative">
        <Hero />
        <List />
      </Container>
      <Footer theme="dark" />
    </Background>
  );
}
