import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    let mydata = [
     {"f": "fname1", "l": "lname1", image:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', key:'1'}, 
      {"f": "fname2", "l": "lname2", image:require('./assets/crime.png'), key:'2'},
      {"f": "fname1", "l": "lname1", image:require('./assets/crime.png'), key:'3'},
      {"f": "fname2", "l": "lname2", image:'assets/crime.png', key:'4'},
      {"f": "fname1", "l": "lname1", image:'assets/crime.png', key:'5'},
      {"f": "fname2", "l": "lname2", image:'assets/crime.png', key:'6'},
      {"f": "fname1", "l": "lname1", image:'assets/crime.png', key:'7'},
      {"f": "fname2", "l": "lname2", image:'assets/crime.png', key:'8'},
      {"f": "fname1", "l": "lname1", image:'assets/crime.png', key:'9'},
      {"f": "fname2", "l": "lname2", image:'assets/crime.png', key:'10'},
      {"f": "fname1", "l": "lname1", image:'assets/crime.png', key:'11'}
    ];
    this.state = {
      data: mydata
    };
  }

  componentDidMount() {
    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    return (
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              keyExtractor = {item => item.key}
              title = {item.f}
              subtitle = {item.l}
              roundAvatar
              avatar = {item.image}
              onPress = {() => alert('clicked')}
            />
          )}
        />
      </List>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
