import { TEXT_STYLES } from '../utils/constants/text-style';
import { COLORS } from '../utils/constants/color-style';
import { View, Text, StyleSheet, Animated, Image, Button } from 'react-native';



const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/welcomeaboard.png')} />
            <Image style={styles.image} source={require('../assets/images/smile.png')} />

            <Button
                onPress={() =>   navigation.navigate('AvatarSelection')}
                title="START"
                accessibilityLabel="Learn more about this purple button"
            />
            {/* <Text style={TEXT_STYLES.title}>WelcomeAbroad</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black
    }
});

export default WelcomeScreen;
