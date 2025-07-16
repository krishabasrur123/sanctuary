import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { supabase } from '../../lib/createClient';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleSignOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Error signing out: ' + error.message);
    } else {
      router.replace('./login_screen'); 
    }
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-xl font-bold text-green-600 mb-4">
        Welcome to the Protected Profile!
      </Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}
