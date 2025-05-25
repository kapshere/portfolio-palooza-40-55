
import React from "react";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
