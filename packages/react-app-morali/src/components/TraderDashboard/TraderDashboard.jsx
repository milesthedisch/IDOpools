import React from 'react';
import {Typography, Paper, Tabs, Tab, Box} from '@mui/material'
import MiniDrawer from './SideBar'
// https://github.com/gnosis/safe-react-apps/tree/development/apps/wallet-connect/src/hooks
// https://help.gnosis-safe.io/en/articles/4356253-walletconnect-safe-app
// How to connect to a Dapp
// 1) Open a Dapp with WalletConnect support.

// 2) Copy QR code image (Command+Control+Shift+4 on Mac, Windows key+PrtScn on Windows) or connection URI into clipboard.

// 3) Paste QR code image or connection URI into the input field (Command+V on Mac, Ctrl+V on Windows)

// 4) WalletConnect connection will be established automatically.

// 5) Now you can trigger transactions via the Dapp to your Safe.

// How to use WalletConnect with the Gnosis Safe Multisig
const TraderDashboard = () => {
    return (
        <Paper >
<MiniDrawer/>
        </Paper>
    );
};

export default TraderDashboard;