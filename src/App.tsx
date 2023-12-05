// App.tsx

// import { Contact } from "./components/Contact";
// import { Test } from "./components/Test";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
// import { WhyUs } from "./components/WhyUs";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
      <Header />
      <Hero />
      {/* <WhyUs /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Test /> */}
      <Footer />
      </div>
    </>
  );
};

export default App;
