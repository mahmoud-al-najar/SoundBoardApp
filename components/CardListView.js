import React from 'react';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner } from 'native-base';
import {Icon} from 'react-native-elements'
import { StyleSheet, Text, View, SectionList, FlatList, TouchableOpacity } from 'react-native';
import SingleCardView from 'react-native-simple-card';
import * as Progress from 'react-native-progress';
import GridView, { SuperGridSectionList } from 'react-native-super-grid';

class CardListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            position: 0.3,
            name: props.name,
        }
    }

    render() {

        let views = [];
        this.state.data.forEach(item => {
            
            views.push(
                <TouchableOpacity key={item.url} onPress={() => {
                    item.audio.playAudio();
                    this.setState({ position: (item.audio.position * 100) / item.audio.duration });
                }}>
                <Card style={styles.card}>
                    <Icon
                        name={item.icon}
                        color='#00aced'
                        size = {50}

                    />
                    
                        <Text style={{ padding: 10, fontSize: 16 }}>
                            {item.name}
                        </Text>
                    
                </Card>
                </TouchableOpacity>
            )
        });
        return (


            <View {...this.props}>
            <Text style={styles.sectionHeader}>{this.state.name}</Text>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {views}
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#9e9e9e',
        height: 59
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        width: 140,
        elevation: 2,
        shadowColor: 'rgb(50,50,50)',
    }
});

export default CardListView;