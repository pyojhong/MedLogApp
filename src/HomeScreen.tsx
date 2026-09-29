import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleView}>
        <Text style={styles.title}>복약일지</Text>
      </View>
      <View style={styles.mainWrapper}>
        <ScrollView style={styles.mainScrollView}>
          <View style={styles.mainView}>
            <Text>약</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomButtonView}>
        <Pressable onPress={() => {navigation.navigate('AddMedicine')}} style={({pressed}) => (pressed ? [styles.button, {opacity: 0.5}] : styles.button)}>
          <Text style={styles.buttonText}>약 추가</Text>
        </Pressable>
        <Pressable style={({pressed}) => (pressed ? [styles.button, {opacity: 0.5}] : styles.button)}>
          <Text style={styles.buttonText}>약 설정</Text>
        </Pressable>
      </View>
    </View>
  );
}

const GREEN = '#e2ffe2';
const SHADOW_GREEN = '#2d4a2d';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN,
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 40,
  },
  titleView: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'rgba(100, 150, 100, 0.15)',
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    fontFamily: 'KoreanFont',
  },
  mainWrapper: {
    flex: 4,
    marginVertical: 20,
    shadowColor: SHADOW_GREEN,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  mainScrollView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(100, 150, 100, 0.15)',
    overflow: 'hidden',
  },
  mainView: {
    padding: 20,
  },
  bottomButtonView: {
    flex: 0.7,
    backgroundColor: 'white',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(100, 150, 100, 0.15)',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 700,
    fontSize: 22,
    fontFamily: 'KoreanFont',
  },
});
