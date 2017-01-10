/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Navigator
} from 'react-native';
import HomeFragment from './js_modules/page/HomeFragment';
import testPop from './js_modules/test/testPop';
import testModal from './js_modules/test/testModal';
import testCalendar from './js_modules/test/testCalendar';
import ChengYCD from './js_modules/page/ChengYCD';
export default class MeSee_RN extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{component:HomeFragment}}
            configureScene={()=>{
        return Navigator.SceneConfigs.PushFromRight;}
       }
            renderScene={(route,navigator)=>{
        return <route.component navigator={navigator} {...route.params}/>
        }
        }/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MeSee_RN', () => MeSee_RN);
