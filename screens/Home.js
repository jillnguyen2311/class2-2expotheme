import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import stylesHome from './Home.styles';

export default function Home({navigation}) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={stylesHome.welcomeText}>Welcome!</Text>
            <StatusBar style="auto" />
            <Pressable>
            <Button 
                title="Go to about page"
                onPress={() => navigation.push('About')}
            />
            </Pressable>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
