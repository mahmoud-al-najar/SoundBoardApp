import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions, ScrollView} from 'react-native';
import SearchListView from "./components/SearchListView"
import CardListView from "./components/CardListView";
import {Divider} from "react-native-elements";

import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import DataManager from './DataManager';
import ListViewCurrentlyPlaying from './components/ListViewCurrentlyPlaying';
import GridPanel from './components/GridPanel';
import SectionedCardListView from './components/SectionedCardListView';

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
                        <ListViewCurrentlyPlaying name = 'Currently Playing' data={[]} style={{ flex: 0.3}}/>
                        <Divider style={{backgroundColor: '#E0E0E0'}}/>

                        <CardListView name ='Favorites' data={this.state.dataManager.favoritesArray} />   
                        <Divider style={{backgroundColor: '#E0E0E0'}}/>
 
                        <CardListView name='Suggestions' data={this.state.dataManager.suggestionsArray}/>

                    </ScrollView>
                </View>),

            SecondRoute: () => (

                <ScrollView style={{ flex: 0.6 , flexDirection: 'column'}}>
                    <CardListView name ='Cat1' data={this.state.dataManager.categoriesArray[0].sounds} />    
                    <CardListView name ='Cat2' data={this.state.dataManager.categoriesArray[1].sounds} />    
                    <CardListView name ='Cat3' data={this.state.dataManager.categoriesArray[2].sounds} />    
                </ScrollView>

            ),
            routes: [
                {key: 'first', title: 'Home'},
                {key: 'second', title: 'Library'},
            ],
        }
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
                     renderTabBar={props =>
                         <TabBar
                             {...props}
                             indicatorStyle={{ backgroundColor: '#F9A825' }}
                         />
                     }
                     onIndexChange={index => this.setState({index})}
                     initialLayout={{width: Dimensions.get('window').width, height: 0}}
            />
        );
    }

}
