import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {List, ListItem, SearchBar, Icon} from "react-native-elements";

class SearchListView extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.favorites.length);
        
        props.data.forEach(item => {
            // item.isFavorite = false;
            if (props.favorites.find(s => s.url === item.url) != undefined) item.isFavorite = true;
            else item.isFavorite = false;
            }
        );

        this.state = {
            data: props.data,
            loading: false,
            error: null,
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
                            color={(item.isFavorite) ? '#F9AA25': '#9E9E9E'}
                            //type='font-awesome' 
                            onPress={() => {
                                let temp = this.state.data;
                                temp.forEach(i => {
                                    if (i.key == item.key){
                                        
                                        if (i.isFavorite) i.isFavorite = false;
                                        else i.isFavorite = true;
                                        this.setState({data: temp});
                                        this.forceUpdate();         
                                    }
                                });
                            }}/>}

                        onPress={() => alert('clicked')}
                    />
                )}
                ListHeaderComponent={this.renderHeader}
            />

        );
    }

}

export default SearchListView;