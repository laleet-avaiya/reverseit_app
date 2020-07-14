/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomeScreen);
