import React from "react";
import { Footer, Navbar, Transactions, Welcome } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-[#000]">
      <header>
        <Navbar />
        <Welcome />
      </header>
      <main>
        <Transactions />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
