import React from "react";
import { Navbar, Transactions, Welcome } from "./components";

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
    </div>
  );
};

export default App;
