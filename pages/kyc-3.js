import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/KYCPages/v3/PageHeader";
import Kyc from "@sections/KYCPages/v3";
import Footer from "@sections/Footer/v1";

export default function KycPageThree() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="kyc page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage="KYC" pageTitle="KYC PROCESS" />
        <Kyc />
        <Footer />
      </Layout>
    </Fragment>
  );
}
