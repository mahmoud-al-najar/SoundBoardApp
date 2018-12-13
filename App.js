import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import SearchListView from "./components/SearchListView"
import CardListView from "./components/CardListView";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import DataManager from './DataManager';
import ListViewCurrentlyPlaying from './components/ListViewCurrentlyPlaying';
import GridPanel from './components/GridPanel';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        let dataManager = new DataManager();

        this.state = {
            dataManager: dataManager,
            index: 0,
            FirstRoute: () => (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4 }}>
                        <SearchListView data={dataManager.soundsArray} favorites={dataManager.favoritesArray} /></View>
                    <ScrollView style={{ flex: 0.6 , flexDirection: 'column'}}>
                        {/* <ListViewCurrentlyPlaying name = 'Currently Playing' data={this.state.data} /></View> */}
                        <ListViewCurrentlyPlaying name = 'Currently Playing' data={[]} style={{ flex: 0.3}}/>
                        <CardListView name ='Favorites' data={this.state.dataManager.favoritesArray} />    
                        {/* <CardListView name ='Suggestions' data={this.state.dataManager.suggestionsArray} />     */}
                        {/* <GridPanel style={{ flex: 0.3}}/>
                        <GridPanel style={{ flex: 0.3}}/> */}
                    </ScrollView>
                </View>),

            SecondRoute: () => (
                <View style={{ flex: 1 }}>
                    <CardListView name ='Library' data={this.state.dataManager.soundsArray} />
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
                initialLayout={{ width: Dimensions.get('window').width, height: 0 }}
            />
        );
    }

}
