import React from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Table,
  TableWrapper,
  Row,
  Cell,
} from 'react-native-table-component';
let ScreenHeight = Dimensions.get('window').height;

const UserTable = () => {


  const top10Users = useSelector(state => state.searchKey.top10Users);
  console.log({top10Users})

  const tableData = top10Users ? top10Users.map(user => [
    user.name,
    user.rank,
    user.bananas,
    user.isFound ? 'Yes' : 'No',
  ]) : [];

  const widthArr = [180, 60, 80, 130];

  const element = (data, row, index) => {
    console.log('data:', {data, row, index, width: widthArr[index]});

    return (
      <View
        style={{
          width: widthArr[index],
          borderLeftWidth: 1,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderRightWidth: index == 3 ? 1 : 0,
          borderColor: '#B6C197',
          padding: 5,
        }}>
        <Text style={{color: row[3] == 'Yes' && index == 0 ? 'red' : 'black'}}>{data}</Text>
      </View>
    );
  };

  if (!top10Users || top10Users.length == 0) {
    return null
  }
  

  return (
    <View
      style={{
        height: Math.min(ScreenHeight - 120 + 50, 50 * ( top10Users.length ) + 50),
        padding: 10,
      }}>
      <ScrollView horizontal={true}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{paddingBottom: 30}}>
          <Table borderStyle={{}}>
            <Row
              data={['Name', 'Rank', 'Bananas', 'IsSearchedUser?']}
              style={styles.head}
              textStyle={styles.text}
              widthArr={widthArr}
            />

            {tableData.map((rowData, index) => {
              const _row = rowData;

              return (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={element(cellData, _row, cellIndex)}
                    />
                  ))}
                </TableWrapper>
              );
            })}
          </Table>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    minHeight: 35,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#B6C197',
  },
  head: {height: 40, backgroundColor: '#D5DDBC', padding: 5},
  text: {margin: 0},
});

export default UserTable;
