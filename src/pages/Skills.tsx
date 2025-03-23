
import React from "react";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <Navigation />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
