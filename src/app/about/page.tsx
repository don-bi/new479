import Hero from "./components/Hero";
import Container from "@/components/Container";
import Slider from "./components/Slider";
import Team from "./components/Team";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Stuy Fusion 479",
  description:
    "Meet our talented team of students from Stuyvesant High School. Although we all come from various backgrounds, our common interest in STEM brings us together. As a team, we are dedicated to exploring the exciting world of robotics and competing in the FIRST Tech Challenge.",
};

export default function About() {
  return (
    <Background>
      <Container className="relative pb-24">
        <Hero />
      </Container>
      <Slider />
      <Container className="relative mt-32">
        <Team />
        <Footer theme="dark" />
      </Container>
    </Background>
  );
}
