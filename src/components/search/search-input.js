import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

const SearchInput = () => {

  const onPress = () => {
    Alert.alert('Button with adjusted color pressed');
  };

  return (
    <View style={styles.inputContainer}>
      <View
        style={styles.searchTextBox}>
        <Icon name="search" size={28} color="#8A9B68" />
        <TextInput style={styles.searchInput}></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
    
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
    searchTextBox:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#8A9B68',
      paddingLeft: 5,
      borderRadius: 8,
      marginRight: 5,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#8A9B68',
      padding: 10,
      borderRadius: 8,
      height: 40,
      paddingLeft: 20,
      paddingRight:20,
    },
    buttonTitle: {
      color: 'white',
    },
    searchInput: {
      flex: 1,
      height: 40,
  
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 5,
      
    },
  });

  
export default SearchInput;
