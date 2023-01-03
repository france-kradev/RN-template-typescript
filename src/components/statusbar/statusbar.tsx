import {Box, StatusBar} from 'native-base';
import React from 'react';

const AppStatusBar = () => {
    return <>
        <StatusBar barStyle="dark-content" />
        <Box safeAreaTop/>
    </>
}

export default AppStatusBar
