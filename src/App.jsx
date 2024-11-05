import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
    </BrowserRouter>
  );
}

export default App;
