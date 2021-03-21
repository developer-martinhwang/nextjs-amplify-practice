import React from 'react'
import Link from 'next/link';
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });
function login() {
    return (
        <div>
            <h1>login page</h1>
            <Link href="/">Home</Link>
            <AmplifyAuthenticator>
                <AmplifySignOut/>
            </AmplifyAuthenticator>
        </div>
    )
}

export default login
