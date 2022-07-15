import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import Register from "@sections/AuthPages/Register";
import Footer from "@sections/Footer/v1";

export default function RegisterPage() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="register page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Register />
        <Footer />
      </Layout>
    </Fragment>
  );
}
