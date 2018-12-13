import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {List, ListItem} from "react-native-elements";
import SearchListView from "./components/SearchListView"
import CardListView from "./components/CardListView";
import GridPanel from "./components/GridPanel";
import DataManager from './DataManager';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        let dataManager = new DataManager();
        
        this.state = {
            data: dataManager.soundsArray
        };
    }

    componentDidMount() {
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }

    render() {
        return (

            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:0.4}}>
                    <SearchListView data={this.state.data}/></View>
                <View style={{flex:0.6}}>
                    <CardListView data={this.state.data}/></View>
            </View>
//<GridPanel />

        );


    }

}
