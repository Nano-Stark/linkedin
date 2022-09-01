import React from "react";

const Backdrop = ({ children }) => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0  bg-gray-100/10 z-[100] rounded-lg">
      <div className=" flex items-center justify-center w-[70vw] h-[100vh] mx-auto rounded-2xl">
        {children}
      </div>
    </section>
  );
};

export default Backdrop;
