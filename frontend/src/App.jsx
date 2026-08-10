import React from "react";
import { Meteors } from "./components/Meteors";
import { Particles } from "./components/Particles";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Meteors />
        <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
              />
      </div>

      {/* Main content */}
      <div className="container-fluid mx-auto max-w-8xl relative z-10">
        <Home />
      </div>
    </div>
  );
};

export default App;
