import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

class SearchListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            loading: false,
            error: null,
        };
        this.arrayholder = props.data;

    }


    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.f.toUpperCase()}   
    ${item.f.toUpperCase()} ${item.l.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({data: newData});
    };

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Search a sound"
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
            />
        );
    };

    render() {
        return (
            <List>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <ListItem
                            keyExtractor={item => item.key}
                            title={item.f}
                            subtitle={item.l}
                            roundAvatar
                            avatar={item.image}
                            onPress={() => alert('clicked')}
                        />
                    )}
                    ListHeaderComponent={this.renderHeader}
                />
            </List>


        );
    }


}

export default SearchListView;