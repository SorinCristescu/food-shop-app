import { StyleSheet, View, Text } from "react-native"


export const Browse: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Browse</Text>
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