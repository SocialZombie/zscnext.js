import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/StakingPages/v3/PageHeader";
import Staking from "@sections/StakingPages/v4";
import Footer from "@sections/Footer/v1";

export default function StakingFour() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="staking four" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage="PROJECT DETAILS " pageTitle="STAKING v4" />
        <Staking />
        <Footer />
      </Layout>
    </Fragment>
  );
}
