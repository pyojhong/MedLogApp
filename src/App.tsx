import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddMedicineScreen from './AddMedicineScreen';
import HomeScreen from './HomeScreen';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'KoreanFont': require('../assets/fonts/Cafe24Ssurround-v2.0.ttf'),
    'EnglishFont' : require('../assets/fonts/Cafe24Decobox.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='AddMedicine' component={AddMedicineScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}