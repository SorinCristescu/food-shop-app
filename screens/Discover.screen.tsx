import { StyleSheet, View, Text } from "react-native"


export const Discover: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Discover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });