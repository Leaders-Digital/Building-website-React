import DemoFeatures from "@/components/DemoFeatures/DemoFeatures";
import DemoGallery from "@/components/DemoGallery/DemoGallery";
import DemoTop from "@/components/DemoTop/DemoTop";
import DemoHeader from "@/components/Header/DemoHeader";
import Layout from "@/components/Layout/Layout";
import MainFooterDemo from "@/components/MainFooter/MainFooterDemo";
import Style from "@/components/Reuseable/Style";
import React from "react";
import HomeMain from "./index-main";

const Home = () => {
  return (
    <Layout pageTitle="Entreprise de Construction Bâtiment en Tunisie | Leaders building">
      <Style />
      <HomeMain />
    </Layout>
  );
};

export default Home;
