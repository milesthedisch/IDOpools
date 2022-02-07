
import React from "react"
import { Typography, makeStyles } from "@mui/material"

const styles =  {
    container: {
        display: "inline-grid",
        gridTemplateColumns: "auto auto auto",
        alignItems: "center"
    },
    tokenImg: {
        width: "32px"
    },
    amount: {
        fontWeight: 700
    }
}


const BalanceMsg = ({ label, amount, tokenImgSrc }) => {


    return <div style={styles.container}>
        <Typography component="span">{label}:</Typography>
        <Typography sx={styles.amount} component="span">{amount}</Typography>
        <img style={styles.tokenImg} src={tokenImgSrc} alt="token logo" />
    </div>
}
export default BalanceMsg;