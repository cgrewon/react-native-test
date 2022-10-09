import React from 'react';
import {Dimensions, ScrollView, View, Text, StyleSheet,Alert } from 'react-native';
import {useSelector} from 'react-redux';
import Api from '../../service/api';
let ScreenHeight = Dimensions.get('window').height;

const UserRow = ({user}) => {
  return (
    <View key={user.uid + '_key'} style={styles.row}>
      <Text style={{color: user.isFound === true ? 'red' :'black'}}>{user.name}</Text>
      <Text>{user.rank}</Text>
      <Text>{user.bananas}</Text>
      <Text>{user.isFound === true ? 'Yes' : 'No'}</Text>
    </View>
  );
};

const UserTable = () => {
  const [top10, setTop10] = React.useState([]);
  
  const searchKey = useSelector(state => state.searchKey.searchKey);
  

  React.useEffect(() => {
    const {users, isFound} = Api.searchUser(searchKey);
    if (!isFound && searchKey) {

        Alert.alert('Not found',"This user name does not exist! Please specify an existing user name.")
    }
    setTop10(users)

  }, [searchKey]);

  
  return (
    <View style={{height: Math.min(ScreenHeight - 120 + 50, 50 * top10.length + 50), padding: 10}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{paddingBottom: 30}}>
        {top10.map((user, index) => {
          return (
            <UserRow key={index + '_key'} user={user}/>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UserTable;
