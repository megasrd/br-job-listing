'use client';

import store from './store';
import { Provider } from 'react-redux';

function Initializer({ children }) {
    console.log("Initializing Redux store");
    return <>{children}</>;
}

export function ReduxProvider({ children }) {
    return (
        <Provider store={store}> 
            <Initializer> 
                { children }
            </Initializer>
        </Provider>
    )
}