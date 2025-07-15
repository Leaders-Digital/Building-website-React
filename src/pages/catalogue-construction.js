import PageBanner from "@/components/BannerSection/PageBanner";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PostControl from "@/components/PostControl/PostControl";
import ProjectSingle from "@/components/ProjectSection/ProjectSingle";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const catalogueconstruction = () => {
 return (
  <Layout pageTitle="Notre Catalogue">
    <Style />
    <HeaderOne />
    <MobileMenu />
    <SearchPopup />
    <PageBanner title="Notre Catalogue" />

    <iframe
      allowFullScreen
      allow="clipboard-write"
      scrolling="no"
      className="fp-iframe"
      src="https://heyzine.com/flip-book/81348bbb28.html"
      style={{ border: '1px solid lightgray', width: '100%', height: '323px' }}
    ></iframe>

    {/* <ProjectSingle /> */}
    {/* <PostControl /> */}
    {/* <GallerySectionOne similar /> */}
    <MainFooter />
  </Layout>
);

}

export default catalogueconstruction