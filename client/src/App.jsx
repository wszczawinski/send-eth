import React from "react";
import {
  Footer,
  Loader,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <header className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </header>
      <main>
        <Services />
        <Transactions />
      </main>
      <Footer />
    </div>
  );
};

export default App;
