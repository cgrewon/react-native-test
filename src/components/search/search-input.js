import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../../service/api';
import {updateSearchKey, updateTop10} from '../../state/actions';

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchKey = useSelector(state => state.searchKey.searchKey);
  const [searchText, setSearchText] = React.useState('');

  const onPress = () => {
    dispatch(updateSearchKey(searchText));

    const {users, isFound} = Api.searchUser(searchText);
    if (!isFound && searchKey) {
      Alert.alert(
        'Not found',
        'This user name does not exist! Please specify an existing user name.',
      );
    }

    dispatch(updateTop10(users));
  };

  const handleChange = val => {
    setSearchText(val);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.searchTextBox}>
          <Icon name="search" size={28} color="#8A9B68" />
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={handleChange}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonTitle}>Search</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  searchTextBox: {
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
    paddingRight: 20,
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
