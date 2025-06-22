import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/main.scss";
import "./styles/reset.scss";

import "./components/Header/index.scss";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Project from "./pages/Project/Project";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import Team from "./pages/Team/Team";
import Page404 from "./pages/Page404/Page404";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Faq from "./pages/Faq/Faq";
import ProjectSingle from "./pages/ProjectSingle/ProjectSingle";
import ServicesSingle from "./pages/ServicesSingle/ServicesSingle";
function App() {
  const pickPerson = () => {
    console.log("erhererh");
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team pickPerson={pickPerson} />} />
          <Route path="/page" element={<ArticlePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/projectsingle" element={<ProjectSingle />} />
          <Route path="/servicessingle" element={<ServicesSingle />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
