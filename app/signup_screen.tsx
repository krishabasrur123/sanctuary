import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { supabase } from '../lib/createClient';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  async function handleSignUp() {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Error signing up: " + error.message);
    return;
  }

  if (data.user) {
    const user = data.user;
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: user.id, name, email }]);

    if (profileError) {
      alert("Error saving profile: " + profileError.message);
      return;
    }
  }

  alert("Sign-up successful! Please sign in.");
  router.replace("/login_screen");
}

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-semibold text-gray-900 mb-4">
        Sign Up Today
      </Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: "#ccc", width: "80%", marginBottom: 12, padding: 8 }}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: "#ccc", width: "80%", marginBottom: 12, padding: 8 }}
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: "#ccc", width: "80%", marginBottom: 12, padding: 8 }}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
