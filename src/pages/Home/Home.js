import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import SurahsList from "../SurahsList/SurahsList";
import UserInfo from "../UserInfo/UserInfo";

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <AppHeader />
        <SurahsList />
      </div>
      <div className="col-lg-2 d-flex justify-content-center">
        <UserInfo />
      </div>
    </div>
  );
}
