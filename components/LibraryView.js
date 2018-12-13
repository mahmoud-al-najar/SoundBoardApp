import React from 'react';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon } from 'native-base';
import { StyleSheet, Text, View, SectionList, FlatList } from 'react-native';
import SingleCardView from 'react-native-simple-card';
import * as Progress from 'react-native-progress';

// new
import GridView, { SuperGridSectionList } from 'react-native-super-grid';

class CardListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        }
    }

    render() {
        return (
            <SuperGridSectionList
                itemDimension={130}
                sections={[
                    { title: 'Category 1', data: this.state.data },
                    { title: 'Category 2', data: this.state.data },
                    { title: 'Category 3', data: this.state.data },

                ]}

                style={styles.gridView}
                renderItem={({ item }) => (
                    <Card
                        elevation={1}
                        shadowColor="rgb(50,50,50)"
                        shadowOpacity={1}
                        marginTop={100}
                        height={150}
                        width={150}>
                        <View style={styles.item}>

                            <Text style={{ padding: 10, fontSize: 18 }}>
                                {item.f}
                            </Text>

                            <Progress.Bar progress={0.3} width={125} />
                        </View>
                    </Card>
                )}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />

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
        // paddingTop: 5,
        //paddingLeft: 10,
        //paddingRight: 10,
        //paddingBottom: 5,
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
        padding: 10,
        margin: 10
    },
    gridView: {
        //paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
      //  padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

export default CardListView;