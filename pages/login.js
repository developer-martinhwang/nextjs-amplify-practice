import React from 'react'
import Link from 'next/link';
import { AmplifyAuthenticator} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

function login() {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    return(
        <div>
            <h1>login page</h1>
            <Link href="/">Home</Link>
            {authState === AuthState.SignedIn && user ? (
                <div>
                    <div>Hello, {user.username}</div>
                </div>
            ) : (
            <div>
                <AmplifyAuthenticator />
            </div>
            )}
        </div>
    )
}

export default login
