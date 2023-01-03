import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Main from 'src/components/main/main';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            <SafeAreaProvider>
              <Main />
            </SafeAreaProvider>
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default registerRootComponent(App);
