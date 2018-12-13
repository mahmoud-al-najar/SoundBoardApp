import React from 'react';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon } from 'native-base';
import { StyleSheet, Text, View, SectionList, FlatList, TouchableOpacity } from 'react-native';
import SingleCardView from 'react-native-simple-card';
import * as Progress from 'react-native-progress';
import GridView, { SuperGridSectionList } from 'react-native-super-grid';

class ListViewCurrentlyPlaying extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            position: 0.3,
            name:props.name,
        }
    }

    render() {
        return (
            <SuperGridSectionList
                keyExtractor={(item, index) => item.key}
                sections={[
                    { title: this.state.name, data: this.state.data },

                ]}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}>
                        <TouchableOpacity onPress={() => {
                                item.audio.playAudio();
                                this.setState({position: (item.audio.position * 100) / item.audio.duration});
                            }
                        }>

                            <Text style={{ padding: 10, fontSize: 14 }}>
                                {item.name}
                            </Text>

                            {/* <Progress.Bar progress={(this.state.data[this.state.data.indexOf(item)].audio.position * 100) / this.state.data[this.state.data.indexOf(item)].audio.duration} width={125} /> */}
                            <Progress.Bar progress={this.state.position} width={125} />
                        </TouchableOpacity>
                    </Card> 
                )}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
   sectionHeader: {
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
        // paddingBottom: 5,
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 59
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 140,
        // width: 140,
        elevation: 1,
        shadowColor: 'rgb(50,50,50)',
    }
});

export default ListViewCurrentlyPlaying;