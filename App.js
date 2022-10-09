/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {Colors, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';

let ScreenHeight = Dimensions.get('window').height;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = () => {
    Alert.alert('Button with adjusted color pressed');
  };

  const arrayLen = 5;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          height: ScreenHeight,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View style={styles.inputContainer}>
          <View style={{flex:1}}>
          
          <TextInput style={styles.searchInput}></TextInput>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonTitle}>Press Here</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 80 * arrayLen, padding: 10}}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {Array(arrayLen)
              .fill(1)
              .map((one, index) => {
                return (
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor:'#D5DDBC',
                      marginBottom: 10,
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 5,
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center'
                    }}>
                    <Text>User name</Text>
                    <Text>User Email</Text>
                    <Text>User Age</Text>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8A9B68',
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  buttonTitle: {
    color: 'white',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#8A9B68',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default App;
