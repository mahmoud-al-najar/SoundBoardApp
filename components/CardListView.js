import React from 'react';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon } from 'native-base';
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

    // let views = [];

    // for(let j=0;j < this.props.cellCount; j++) {
    //     views.push(
    //         <View key={j} style={styles.box}>
    //             <View style={styles.innerBox}/>
    //         </View>
    //     )
    // }

    // return (
    //     <View {...this.props}>
    //         <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
    //             { views }
    //         </View>
    //     </View>
    // );


    // renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}    
    render() {

        let views = [];

        // for (let j = 0; j < this.state.data.length; j++) {
        this.state.data.forEach(item => {
            // item.key = item.url;
            views.push(
                <Card style={styles.card} key={item.url}>
                    <TouchableOpacity onPress={() => {
                        item.audio.playAudio();
                        this.setState({ position: (item.audio.position * 100) / item.audio.duration });
                    }}>
                        <Text style={{ padding: 10, fontSize: 14 }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </Card>
            )
        });

        // }

        return (



            // return (
            <View {...this.props}>
            <Text style={styles.sectionHeader}>{this.state.name}</Text>
            <View style={{
                alignItems: 'center',
                // justifyContent: 'center', 
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {views}
            </View>
            </View>
            // );
            // <View>
            //     renderItem={({ item }) => (
            //         <Card
            //             style={styles.card}>
            //             <TouchableOpacity onPress={() => {
            //                 item.audio.playAudio();
            //                 this.setState({ position: (item.audio.position * 100) / item.audio.duration });
            //             }
            //             }>

            //                 <Text style={{ padding: 10, fontSize: 14 }}>
            //                     {item.name}
            //                 </Text>

            //             </TouchableOpacity>
            //         </Card>
            //     )}
            // </View>
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
        height: 59
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        width: 140,
        elevation: 1,
        shadowColor: 'rgb(50,50,50)',
    }
});

export default CardListView;