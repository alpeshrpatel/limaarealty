import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MortgageResources from "./components/MortgageResources";
import MortgageFooter from "./components/MortgageFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculators from "./components/NavComponents/Calculators";
import MortgageCalculator from "./components/NavComponents/MortgageCalculator";
import LoanCalculator from "./components/NavComponents/LoanCalculator";
import PrincipalCalculator from "./components/NavComponents/PrincipalCalculator";
import LoanTypeSelector from "./components/NavComponents/LoanTypeSelector";
import Sidebar from "./components/Sidebar";
import FeaturedAreas from "./components/FeaturedAreas";
import RealEstateServices from "./components/RealEstateServices";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import NapkinAnalysis from "./components/NavComponents/NapkinAnalysis";
import Contact from "./components/Contact";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setIsSidebarOn(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleBurgerClick = () => {
    setIsSidebarOn((prev) => !prev);
  };

  return (
    <>
      <Router>
        <div className="relative min-h-screen w-full overflow-hidden sm:block lg:flex z-20">
          <div className="bg-[#ECF0F1]">
            <Navbar isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} handleBurgerClick={handleBurgerClick} setIsModalOpen={setIsModalOpen} />
            <div className="fixed w-[200px] h-screen bg-fixed bg-cover bg-center z-20 ">
              {/* <div className="lg:hidden sm:block absolute " onClick={handleBurgerClick}>
            <BurgerIcon />
          </div> */}
              {isSidebarOn && (
                <div className=" lg:block absolute lg:relative left-2 top-[25vh] w-full h-screen z-20" >
                  <Sidebar setIsSidebarOn={setIsSidebarOn} setIsModalOpen={setIsModalOpen} />
                </div>
              )}
            </div>
            <Routes>
              <Route path="/" element={
                <>
                  <section className="w-[100vw] flex justify-center" id="home">
                    <HomePage />
                  </section>
                  <section className="w-[100vw] flex justify-center" id="about">
                    <WhyChooseUs/>
                  </section>
                  <section className="w-[100vw] flex justify-center">
                    <FeaturedAreas />
                  </section>
                  <section className="w-[100vw] flex justify-center" id="services">
                    <RealEstateServices />
                  </section>
                  {/* <section className="w-[100vw] flex justify-center">
                    <MortgageResources />
                  </section> */}
                  <section className="w-[100vw] flex justify-center" id="testimonials">
                    <Testimonials />
                  </section>
                  
                  {/* <HomePage />
                <MortgageResources /> */}
                  {/* <MortgageFooter/> */}
                </>
              } />
              <Route path="/mortgage-calculators" element={<Calculators />} />
              <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
              <Route path="/loan-calculator" element={<LoanCalculator />} />
              <Route path="/principal-calculator" element={<PrincipalCalculator />} />
              <Route path="/select-loantype" element={<LoanTypeSelector />} />
              <Route path="/napkin-analysis" element={<NapkinAnalysis />} />
            </Routes>
            <div id="contact">
              <Contact />
              <MortgageFooter />
               <div className=" py-8 bg-gradient-to-br from-[#34495E] via-[#34496E] to-[#34498E] w-full relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 transform rotate-12 scale-150"></div>
            </div>

            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent animate-pulse"></div>

            <div className="relative text-center">
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group">
                {/* Icon */}
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                </div>

                {/* Text */}
                <span className="text-slate-300 font-medium tracking-wide">
                  Powered by{' '}
                  <a
                    href="https://gotestli.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text font-semibold hover:from-orange-300 hover:to-amber-400 transition-all duration-300 relative"
                  >
                    Gotestli
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </span>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl -z-10"></div>

              {/* Floating particles effect */}
              <div className="absolute top-4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-40 animation-delay-1000"></div>
              <div className="absolute top-6 right-1/4 w-0.5 h-0.5 bg-orange-300 rounded-full animate-pulse opacity-70"></div>
            </div>
          </div>
            </div>
              
          </div>
          <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
        </div>

      </Router>
      {/* <div className="bg-[#F1F5FA]">
        <Navbar />
        <HomePage />
        <MortgageResources />
        <MortgageFooter/>
      </div> */}
    </>
  );
}

export default App;
