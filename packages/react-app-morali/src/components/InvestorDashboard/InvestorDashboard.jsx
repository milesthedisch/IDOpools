import React, { useEffect } from 'react';
import DEX from '../DEX/DEX'
import {Button, Typography, Paper, Tabs, Tab, Box} from '@mui/material'
import {useMoralisCloudFunction} from 'react-moralis'
import MiniDrawer from './MiniDrawer'
import ERC20Balance from '../ERC20Balance';

const InvestorDashboard = () => {
    
    return (
        <Paper >
          <MiniDrawer/>
        </Paper>
    );
};

export default InvestorDashboard;
