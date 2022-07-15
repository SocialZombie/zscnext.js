import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import Login from "@sections/AuthPages/Login";
import Footer from "@sections/Footer/v1";

export default function LoginPage() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="login page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Login />
        <Footer />
      </Layout>
    </Fragment>
  );
}
