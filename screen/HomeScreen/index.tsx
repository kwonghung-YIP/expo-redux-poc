import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default HomeScreen = (props) => {
    const { navigation } = props

    const gotoScreen = (screenName:string) => () => {
        navigation.push(screenName)
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={gotoScreen('flatlist')}>FlatList Demo</Button>
            <Button onPress={gotoScreen('bigtable')}>BigTable Demo</Button>
        </View>
    )
}