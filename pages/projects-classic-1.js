import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import ProjectClassic from "@sections/ProjectPages/ProjectClassic/v1";
import Footer from "@sections/Footer/v1";

export default function ProjectClassicOne() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="project classic" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <ProjectClassic />
        <Footer />
      </Layout>
    </Fragment>
  );
}
