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
            <Link href="/">
                <button>
                    Home    
                </button>
            </Link>
            {authState === AuthState.SignedIn && user ? (
                <div>
                    <h2>Hello, {user.attributes.email}</h2>
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
