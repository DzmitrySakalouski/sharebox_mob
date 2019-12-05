import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
} from 'react-native';
import { LoginScreen, HomeScreen } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store';
import firebase from 'react-native-firebase';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    })
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="default" />
      { Platform.OS === 'ios' && <View style={styles.spacer} /> }
      { user ? <HomeScreen /> : <LoginScreen /> }
    </Provider>
  );
};

const styles = StyleSheet.create({
  spacer: {
    height: 40,
    width: '100%'
  }
});

export default App;
