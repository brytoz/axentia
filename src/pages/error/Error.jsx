import React, { Fragment, useEffect } from "react";
import { ERROR } from "../../components/images";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


export default function Error() {

  useEffect(() => {
    document.title = "Error 404 | Page Not Found! | Axentia Services  ";
  }, []);
  return (
    <Fragment>
      <div className="w-full ">
        <div className="absolute inset-0">
         <Navbar />
        </div>
        <div className="mt-32 md:mt-24 w-full flex items-center justify-center h-[100%]">
          <div className="w-full text-3xl  md:text-6xl font-bold text-black flex-wrap  text-center">
            <center className="w-full items-center justify-center ">
              <img
                src={ERROR}
                className=" w-[50%]   flex justify-center bg-contain"
                alt="gigscor_error"
              />
            </center>
            {/* <div>Error!</div> */}
            <div className="text-xl text-black/80 ">
              The web page you are looking for can't be found.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:relative inset-x-0 bottom-0">
      <Footer />
      </div>
    </Fragment>
  );
}
