import React from 'react';
import {StyleSheet} from 'react-native';
import {registerRootComponent} from 'expo';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import Main from 'components/main/main';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from 'redux/store';
import {Provider as ReduxProvider} from 'react-redux';


function App() {
    return (
        <>
            <SafeAreaProvider>
                <Main/>
            </SafeAreaProvider>
        </>
    );
}

export default registerRootComponent(App);
