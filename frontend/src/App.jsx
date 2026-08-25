import React, { useEffect, useState } from "react";
import { Meteors } from "./components/Meteors";
import { Particles } from "./components/Particles";
import Home from "./pages/Home";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 1000);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="loading-screen" role="status" aria-label="Loading portfolio">
          <div className="loading-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="loading-label">Rishangi</p>
          <div className="loading-track" aria-hidden="true">
            <span />
          </div>
        </div>
      )}

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




// import { Routes, Route } from "react-router-dom";

// import AdminLogin from "./admin/pages/AdminLogin";
// import Dashboard from "./admin/pages/Dashboard";

// import AdminLayout from "./admin/components/AdminLayout";
// import ProtectedAdminRoute from "./admin/routes/ProtectedAdminRoute";

// <Routes>

//   <Route path="/" element={<Home />} />

//   <Route
//     path="/admin/login"
//     element={<AdminLogin />}
//   />

//   <Route element={<ProtectedAdminRoute />}>
    
//     <Route path="/admin" element={<AdminLayout />}>
      
//       <Route
//         path="dashboard"
//         element={<Dashboard />}
//       />

//     </Route>

//   </Route>

// </Routes>
