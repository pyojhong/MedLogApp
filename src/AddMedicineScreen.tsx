import {Pressable, Text, View, StyleSheet} from 'react-native';

export default function AddMedicineScreen({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>약 추가 화면</Text>
            </View>
            <Pressable style={({pressed}) => pressed ? ([styles.button, {opacity: 0.5}]) : styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>닫기</Text>
            </Pressable>
        </View>
    );
}

const GREEN = '#e2ffe2';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GREEN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleView: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: 'rgba(100, 150, 100, 0.15)',
    },
    title: {
        fontSize: 24,
        fontFamily: 'KoreanFont',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(100,150,100,0.15)',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'KoreanFont',
    },
});