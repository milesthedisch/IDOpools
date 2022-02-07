import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import { AppBar, Typography, Container } from "@mui/material";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Select from "./components/Select";
import InvestorDashboard from "./components/InvestorDashboard/InvestorDashboard";
import TraderDashboard from "./components/TraderDashboard/TraderDashboard";
import AddressInput from "./components/AddressInput";
import {
  Mainnet,
  ChainId,
  DAppProvider,

} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const { Footer } = Layout;

const styles = {};

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select" element={<Select />} />
          <Route path="/select" element={<Select />} />
          <Route path="/trade" element={<TraderDashboard />} />
          <Route path="/invest" element={<InvestorDashboard />} />
          <Route path="/balances" element={<AddressInput />} />
        </Routes>
      </Router>
  );
};

export default App;
