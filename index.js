import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import WelcomeScreen from './src/screens/Home'
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/store';

const store = configureStore();

const ReverseIt = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => ReverseIt);
