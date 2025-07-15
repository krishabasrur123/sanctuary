import { Image } from 'expo-image';
import { Platform } from 'react-native';
import {View, Text} from 'react-native'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import '../global.css'

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          className="absolute bottom-0 left-0 w-[290px] h-[178px]"
        />
      }>
      <View className="flex-row items-center gap-2">
        <Text className="text-blue-700 dark:text-blue-400">
          Welcome!
        </Text>
        <HelloWave />
      </View>
      <View className="mb-2 gap-2">
        <Text  className="text-purple-700 dark:text-purple-400">
          Step 1: Try it
        </Text>
        <Text className="text-gray-800 dark:text-gray-200">
          Edit <Text  className="text-pink-600 dark:text-pink-400">app/(tabs)/index.tsx</Text> to see changes.
          Press{' '}
          <Text className="text-pink-600 dark:text-pink-400">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
        
      </View>
      <View className="mb-2 gap-2">
        <Text className="text-purple-700 dark:text-purple-400">
          Step 2: Explore
        </Text>
        <Text className="text-gray-800 dark:text-gray-200">
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </Text>
      </View>
      <View className="mb-2 gap-2">
        <Text className="text-purple-700 dark:text-purple-400">
          Step 3: Get a fresh start
        </Text>
        <Text className="text-gray-800 dark:text-gray-200">
          {`When you're ready, run `}
          <Text  className="text-pink-600 dark:text-pink-400">npm run reset-project</Text> to get a fresh{' '}
          <Text  className="text-pink-600 dark:text-pink-400">app</Text> directory. This will move the current{' '}
          <Text  className="text-pink-600 dark:text-pink-400">app</Text> to{' '}
          <Text  className="text-pink-600 dark:text-pink-400">app-example</Text>.
        </Text>
      </View>
      <View className="bg-red-600 p-4">
  <Text className="text-red font-bold">Testing NativeWind!</Text>
</View>
    </ParallaxScrollView>
  );
}
