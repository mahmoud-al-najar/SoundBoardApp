import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {List, ListItem, SearchBar, Icon} from "react-native-elements";

class SearchListView extends React.Component {
    constructor(props) {
        super(props);

        props.data.forEach(item => {
                item.image = require('../assets/icons/star-empty.png')
            }
        );

        this.state = {
            data: props.data,
            loading: false,
            error: null,
            iconColor: '#9E9E9E',
        };
        this.arrayholder = props.data;
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.toUpperCase()} ${item.filename.toUpperCase()} ${item.tagsText.toUpperCase()}`;
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
            <FlatList
                data={this.state.data}
                renderItem={({item}) => (

                    <ListItem
                        keyExtractor={item => item.key}
                        title={item.name}
                        //subtitle={item.tagsText}
                        roundAvatar
                        leftIcon={{name: 'library-music'}}
                        rightIcon={<Icon
                            // raised
                            name='star'
                            size={30}
                            color={this.state.iconColor}
                            //type='font-awesome'
                            onPress={() => {
                                this.setState({iconColor: '#F9A825'}),
                                    this.forceUpdate();

                            }}/>}
                        // avatar='../assets/icons/star-empty.png'
                        onPress={() => alert('clicked')}
                    />
                )}
                ListHeaderComponent={this.renderHeader}
            />

        );
    }

}

export default SearchListView;