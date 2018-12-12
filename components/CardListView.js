import React from 'react';
import {Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon} from 'native-base';
import {StyleSheet, Text, View, SectionList, FlatList} from 'react-native';
import SingleCardView from 'react-native-simple-card';
import * as Progress from 'react-native-progress';


class CardListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        }
    }

    renderCard = (item) => {
        return (
            <Card
                elevation={1}
                shadowColor="rgb(50,50,50)"
                shadowOpacity={1}
                marginTop={100}
                height={150}
                width={150}>
                <View style={styles.item}>

                    <Text style={{padding: 10, fontSize: 18}}>
                        {item.f}
                    </Text>

                    <Progress.Bar progress={0.3} width={125}/>
                </View>
            </Card>
        );
    }

    render() {
        return (
            /* <View style={{flex:1, flexDirection: 'row', justifyContent:'space-around' }}>
                 <FlatList
                     data={this.state.data}
                     renderItem={(item) => this.renderCard(item)}
                     horizontal={false}
                     noOfColumns={1}
                 />
             </View>
                 )*/

            <View style={styles.container}>
                <SectionList
                    // horizontal={false}
                    //  noOfColumns={2}
                    sections={[
                        {title: 'Category 1', data: this.state.data},
                        {title: 'Category 2', data: this.state.data},
                        {title: 'Category 3', data: this.state.data},

                    ]}
                    renderItem={({item}) => this.renderCard(item)}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    // keyExtractor={(item, index) => index}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        padding: 10

    }
});

export default CardListView;