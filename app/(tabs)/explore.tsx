import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { View, Text, Pressable } from 'react-native'
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>

      <ThemedText className="mb-4">
        This app includes example code to help you get started.
      </ThemedText>

      <View className="justify-center items-center bg-blue-500 rounded-lg p-4 mb-6">
        <Text className="text-white text-xl font-bold">Hello, NativeWind!</Text>
      </View>

      <View className="justify-center items-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 p-6 rounded-xl mb-6">
        <Text className="text-white text-3xl font-extrabold mb-6 shadow-lg">
          Welcome to NativeWind!
        </Text>
        <Pressable
          className="bg-white rounded-xl px-8 py-4 shadow-lg"
          onPress={() => alert('You pressed the button!')}
        >
          {({ pressed }) => (
            <Text
              className={`text-lg font-semibold ${
                pressed ? 'text-purple-700' : 'text-purple-900'
              }`}
            >
              Press Me
            </Text>
          )}
        </Pressable>
      </View>

      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* other collapsible sections unchanged */}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
