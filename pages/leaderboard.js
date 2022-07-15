import { Fragment } from "react";
import { useModal } from "src/utils/ModalContext";
import SEO from "@components/SEO";
import Layout from "@components/layout";
import WalletModal from "@components/modal/walletModal/WalletModal";
import Header from "@sections/Header/v2";
import PageHeader from "@sections/LeaderboardPage/PageHeader";
import Leaderboard from "@sections/LeaderboardPage";
import Footer from "@sections/Footer/v1";

export default function LeaderboardPage() {
  const { walletModalvisibility } = useModal();
  return (
    <Fragment>
      <SEO title="leaderboard page" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage="ledearboard" pageTitle="ledearboard" />
        <Leaderboard />
        <Footer />
      </Layout>
    </Fragment>
  );
}
