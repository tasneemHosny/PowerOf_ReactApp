import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import SuccessPartners from "./components/navbar/partners/partners";

function App() {
  return (
    <div className="overflow-hidden">
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <SuccessPartners/>
    <Footer/>
    </div>
  );
}

export default App;

