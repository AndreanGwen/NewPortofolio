"use client";
import Navbar from "../../Commons/Navbar/Navbar";
import dynamic from "next/dynamic";

const HomePage = () => {
  const MainPage = dynamic(
    () => import("@/Components/Commons_2/MainPage/MainPage"),
    { ssr: false }
  );

  return (
    <div
      className={`bg-[#fafafa] w-full min-h-screen bg-cover flex items-center lg:pl-20 lg:pr-20 pl-4 pr-4 flex-col`}
    >
      <Navbar></Navbar>

      <div
        className={`flex lg:justify-between w-full min-h-screen lg:items-center items-center justify-center`}
      >
        <MainPage />
        <div className={`lg:block hidden`}>Photo Tester</div>
      </div>

      <div className="h-screen" id="aboutMe">
        Hai
      </div>
    </div>
  );
};

export default HomePage;
