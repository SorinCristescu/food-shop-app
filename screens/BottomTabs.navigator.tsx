import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import { Browse } from './Browse.screen'
import { Discover } from './Discover.screen'
import { Favourites } from './Favourites.screen'
import { More } from './More.screen'

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator>
            {/* <View style={styles.container}> */}
                <BottomTabs.Screen name="Discover" component={Discover}/>
                <BottomTabs.Screen name="Browse" component={Browse}/>
                <BottomTabs.Screen name="Favourites" component={Favourites}/>
                <BottomTabs.Screen name="More" component={More}/>
            {/* </View> */}
        </BottomTabs.Navigator>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//   });