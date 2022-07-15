import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/ContactPage/PageHeader";
import Contact from "@sections/ContactPage";
import Footer from "@sections/Footer/v1";

export default function ContactPage() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="contact page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage="CONTACT US" pageTitle="GET IN TOUCH" />
        <Contact />
        <Footer />
      </Layout>
    </Fragment>
  );
}
