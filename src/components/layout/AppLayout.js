import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function AppLayout() {
  const backtoTopBtn = useRef(null);

  const scrollFunc = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtoTopBtn.current.classList.add("btn--show");
    } else {
      backtoTopBtn.current.classList.remove("btn--show");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);
  function clickBtnBackToTopHandler() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <React.Fragment>
      <Header />
      <main style={{ minHeight: "80vh", paddingTop: "60px" }}>
        <Outlet />
        <button ref={backtoTopBtn} className="back-to-top" onClick={clickBtnBackToTopHandler}>
          <i className="bx bx-upvote"></i>
        </button>
      </main>
      <Footer />
    </React.Fragment>
  );
}
