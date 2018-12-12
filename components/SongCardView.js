import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingleCardView from 'react-native-simple-card';
import * as Progress from 'react-native-progress';

class SongCardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: props.song
        }
    }

    render(){
        return (
            <SingleCardView
                elevation={1}
                shadowColor="rgb(50,50,50)"
                shadowOpacity={1}
                marginTop={100}
                height={150}
                width={150}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height:150}}>

                    <Text style={{ padding: 10, fontSize: 18 }}>
                        {this.state.songTitle}
                    </Text>

                    <Progress.Bar progress={0.3} width={125} /> 
                </View>
            </SingleCardView>
		);
    }
}

export default SongCardView;