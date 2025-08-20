import React from "react";
import Navbar from "../components/Navbar/Navbar";
import UserInfo from "../components/User/Userinfo";
import Footer from "../components/Footer/Footer";
const UserInfoPage = () => {
  return (
    <div>
        <Navbar/>
        <UserInfo/>
        <Footer/>
    </div>
  );
};

export default UserInfoPage;
