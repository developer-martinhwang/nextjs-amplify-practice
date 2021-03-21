import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
// material-ui core
import {Box,
    Tooltip} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
// material-ui icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const useStyles = makeStyles({
    root:{
        margin: "0",
        padding: "0",
        display:"flex",
        justifyContent:"space-between",
        fontSize: "1.5em",
        width: "100%",
        background: "gray"
    },
    col: {
        padding: "0.3em"
    },
})
function Navbar() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.col}>
                Nextjs-amplify Practice
            </Box>
            <Box className={classes.col} display="flex" justifyContent="space-between">
                <Link href="/person">
                    <h5 className={styles.person}>person</h5>
                </Link>
                <Tooltip title="login" placement="bottom">
                    <Link href="/login">
                        <AccountBoxIcon/>
                    </Link>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Navbar
