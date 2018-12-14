import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar, Icon } from "react-native-elements";

class SearchListView extends React.Component {
    constructor(props) {
        super(props);

        props.data.forEach(item => {
            // item.isFavorite = false;
            if (props.favorites.find(s => s.url === item.url) != undefined) item.isFavorite = true;
            else item.isFavorite = false;
        }
        );

        let count = this.getCountFavorites(props.data);
        // console.log('Count favs: ' + count);

        this.state = {
            data: props.data,
            loading: false,
            error: null,
            countFavorites: count,
        };
        this.arrayholder = props.data;
    }

    getCountFavorites(list) {
        let count = 0;
        list.forEach(i => {
            if (i.isFavorite) count++;
        })
        // console.log('inside: ' + count);
        
        return count;
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.toUpperCase()} ${item.filename.toUpperCase()} ${item.tagsText.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({ data: newData });
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
                key={this.state.countFavorites}
                data={this.state.data}
                renderItem={({ item }) => (

                    <ListItem
                        keyExtractor={item => item.key}
                        title={item.name}
                        //subtitle={item.tagsText}
                        roundAvatar
                        leftIcon={{ name: 'library-music' }}
                        rightIcon={<Icon
                            // raised
                            name='star'
                            size={40}
                            color={(item.isFavorite) ? '#F9AA25' : '#9E9E9E'}
                            //type='font-awesome' 
                            onPress={() => {
                                let temp = this.state.data;
                                temp.forEach(i => {
                                    if (i.key == item.key) {

                                        if (i.isFavorite) i.isFavorite = false;
                                        else i.isFavorite = true;
                                        this.setState({ data: temp, countFavorites: this.getCountFavorites(temp) });                                        
                                        // this.forceUpdate();
                                        // console.log(this.getCountFavorites(temp));
                                    }
                                });
                            }} />}

                        onPress={() => item.audio.playAudio()}
                    />
                )}
                ListHeaderComponent={this.renderHeader}
            />

        );
    }

}

export default SearchListView;