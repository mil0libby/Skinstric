import React from "react";
import Nav from "../components/Nav/Nav";
import LandingMain from "../components/LandingMain/LandingMain";
import LandingFooter from "../components/LandingFooter/LandingFooter";

export default function Landing() {
  return (
    <div>
      <Nav label={"INTRO"} getCode={true}></Nav>
      <LandingMain></LandingMain>
      <LandingFooter></LandingFooter>
    </div>
  );
}
