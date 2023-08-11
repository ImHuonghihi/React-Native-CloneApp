/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import { WelcomeScreen, Login, Register, FoodList, ProductGridView, Setting } from './screens';

AppRegistry.registerComponent(appName,
  () => () => <Setting/>);




