import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import SearchListView from "./components/SearchListView"
import CardListView from "./components/CardListView";
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        let mydata = [
            {
                "f": "fname1",
                "l": "lname1",
                image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                key: '1'
            },
            {"f": "fname2", "l": "lname2", image: require('./assets/crime.png'), key: '2'},
            {"f": "fname1", "l": "lname1", image: require('./assets/crime.png'), key: '3'},
            {"f": "fname2", "l": "lname2", image: 'assets/crime.png', key: '4'},
            {"f": "fname1", "l": "lname1", image: 'assets/crime.png', key: '5'},
            {"f": "fname2", "l": "lname2", image: 'assets/crime.png', key: '6'},
            {"f": "fname1", "l": "lname1", image: 'assets/crime.png', key: '7'},
            {"f": "fname2", "l": "lname2", image: 'assets/crime.png', key: '8'},
            {"f": "fname1", "l": "lname1", image: 'assets/crime.png', key: '9'},
            {"f": "fname2", "l": "lname2", image: 'assets/crime.png', key: '10'},
            {"f": "fname1", "l": "lname1", image: 'assets/crime.png', key: '11'}
        ];


        this.state = {
            data: mydata,
            index: 0,
            FirstRoute: () => (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.4}}>
                        <SearchListView data={this.state.data}/></View>
                    <View style={{flex: 0.6}}>
                        <CardListView data={this.state.data}/></View>
                </View>),

            SecondRoute: () => (
                <View style={{flex: 1}}>
                    <CardListView data={this.state.data}/>
                </View>
            ),
            routes: [
                {key: 'first', title: 'Home'},
                {key: 'second', title: 'Library'},
            ],
        };
    }


    componentDidMount() {
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }



    render() {
        return (
            <TabView style={{paddingTop: 24}}

                     navigationState={this.state}
                     renderScene={SceneMap({
                         first: this.state.FirstRoute,
                         second: this.state.SecondRoute,
                     })}
                     onIndexChange={index => this.setState({index})}
                     initialLayout={{width: Dimensions.get('window').width}}
            />
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
    scene: {
        flex: 1,
    },
});
