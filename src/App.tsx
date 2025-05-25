
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import BlogPage from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PhilosophicalPost from "./pages/PhilosophicalPost";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import CorporateExperience from "./pages/CorporateExperience";
import Entrepreneurship from "./pages/Entrepreneurship";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Social from "./pages/Social";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/philosophy/:slug" element={<PhilosophicalPost />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/corporate-experience" element={<CorporateExperience />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/social" element={<Social />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
