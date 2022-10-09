import React from 'react';
import {Dimensions, ScrollView, View, Text, StyleSheet} from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

const arrayLen = 10;

const UserTable = () => {
    
  const scrollHeihgt =
    50 * arrayLen > ScreenHeight - 120
      ? ScreenHeight - 120 + 50
      : 50 * arrayLen + 50;

  return (
    <View style={{height: scrollHeihgt, padding: 10}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{paddingBottom: 30}}>
        {Array(arrayLen)
          .fill(1)
          .map((one, index) => {
            return (
              <View key={index + '_key'} style={styles.row}>
                <Text>User name</Text>
                <Text>User Email</Text>
                <Text>User Age</Text>
              </View>
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
