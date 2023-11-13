// App.tsx

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";

const App = () => {
  return (
    <>
      {/* <div className="min-h-screen"> */}
      <Header />
      <Hero />
      {/* </div> */}
      <WhyUs />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
