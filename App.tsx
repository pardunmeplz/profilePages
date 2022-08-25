import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Five from './src/Five';
import Four from './src/four';
import One from './src/One';
import Three from './src/Three';
import Two from './src/Two';

export type RootStackParams = {
  one: undefined;
  two: undefined;
  three: undefined;
  four: undefined;
  five: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='one'>
        <Stack.Screen name='one' component={One} options={{ headerShown: false }} />
        <Stack.Screen name='two' component={Two} options={{ headerShown: false }} />
        <Stack.Screen name='three' component={Three} options={{ headerShown: false }} />
        <Stack.Screen name='four' component={Four} options={{ headerShown: false }} />
        <Stack.Screen name='five' component={Five} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
