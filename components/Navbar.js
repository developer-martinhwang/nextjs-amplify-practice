import React, {useState, useEffect} from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
// material-ui core
import {Box,
    Tooltip} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
// material-ui icons
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Auth } from "aws-amplify";
import { useRouter } from 'next/router'
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
    mousepointer: {
        '& :hover': {
            cursor: "pointer"
        }
    }
})
function Navbar() {
    const classes = useStyles();
    const [accessToken, setAccessToken] = useState('');
    const router = useRouter()
    useEffect(() => {
        setAccessToken(localStorage.getItem('CognitoIdentityServiceProvider.224sun4lq2m82e6lmq5lr6p6jt.2ad52d9c-491c-4e09-8353-15d7af355520.accessToken'))
    }, [])
    const signOutHandler = async () => {
        try {
            await Auth.signOut();
            router.push('/login');
        } catch (err) {
          console.log(err);
        }
    };
    return (
        <Box className={classes.root}>
            <Box className={classes.col}>
                Nextjs-amplify Practice
            </Box>
            <Box className={classes.col} display="flex" justifyContent="space-between">
                <Link href="/person">
                    <h5 className={styles.person}>person</h5>
                </Link>
                {accessToken?
                    <div className={classes.mousepointer}>
                        <Tooltip title="log out" placement="bottom">
                            <LockIcon onClick={signOutHandler} />
                        </Tooltip>
                    </div>:
                    <div className={classes.mousepointer}>
                        <Link href="/login">
                            <Tooltip title="log in" placement="bottom">
                                <LockOpenIcon />
                            </Tooltip>
                        </Link>
                    </div>
                }
            </Box>
        </Box>
    )
}

export default Navbar
