import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from "expo-router";
import Constants from "expo-constants";

export default function homescreen() {
  const greeting = Constants.expoConfig?.extra?.ENV_PUBLIC_GREETING || "No greeting";
  const version = Constants.expoConfig?.extra?.ENV_PUBLIC_VERSION || "0.0.0";
console.log('Runtime SUPABASE KEY:', Constants.expoConfig?.extra?.SUPABASE_ANON_KEY);

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
        

      <Text className="text-xl font-bold text-blue-500 mb-2">
        Hello from NativeWind + Expo Router!
      </Text>
      <Text className="text-base text-gray-700 mb-4">
        {greeting} (v{version})
      </Text>

      <Link href="/protected/profile">
        <Button title="Go to Profile" onPress={() => {}} />
      </Link>

      <Link href="/signup_screen">
        <Button title="Sign Up" onPress={() => {}} />
      </Link>
      <Link href="/login_screen">
        <Button title="Sign In" onPress={() => {}} />
      </Link>
    </View>
  );
}