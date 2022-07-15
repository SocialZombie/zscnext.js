import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ProjectPages/ProjectsList/PageHeader";
import ProjectsGrid from "@sections/ProjectPages/ProjectsGrid";
import Footer from "@sections/Footer/v1";

export default function ProjectGridPage() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="project grid page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage="PROJECTS" pageTitle="EXPLORE IGOS" />
        <ProjectsGrid />
        <Footer />
      </Layout>
    </Fragment>
  );
}
