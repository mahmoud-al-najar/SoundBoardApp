import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import SearchListView from "./components/SearchListView"
import CardListView from "./components/CardListView";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import DataManager from './DataManager';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        let dataManager = new DataManager();

        this.state = {
            data: dataManager.soundsArray,
            index: 0,
            FirstRoute: () => (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4 }}>
                        <SearchListView data={this.state.data} /></View>
                    <View style={{ flex: 0.6 }}>
                        <CardListView name = 'Currently Playing' data={this.state.data} /></View>
                </View>),

            SecondRoute: () => (
                <View style={{ flex: 1 }}>
                    <CardListView name ='Library' data={this.state.data} />
                </View>
            ),
            routes: [
                { key: 'first', title: 'Home' },
                { key: 'second', title: 'Library' },
            ],
        }
    }


    componentDidMount() {
        Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }



    render() {
        return (
            <TabView style={{ paddingTop: 24 }}
                navigationState={this.state}
                renderScene={SceneMap({
                    first: this.state.FirstRoute,
                    second: this.state.SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width, height: 10 }}
            />
        );
    }


}



