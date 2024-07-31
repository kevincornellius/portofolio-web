import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

function page() {
  return (
    <div className=" min-h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
      <div className=" max-w-7xl mx-auto ">
        <Navbar />
        <div className="py-60">
          {/*Content is here> */}
          <About />
        </div>
      </div>
    </div>
  );
}

export default page;
