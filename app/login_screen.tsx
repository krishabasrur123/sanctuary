

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { supabase } from '../lib/createClient';

export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password,setPassword]= useState('');

    const router = useRouter();
  

     async function handleSignIn() {
      console.log('Signing in with:', email, password);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Error signing in: " + error.message);
    } else {
      // If sign-in succeeded, go home or wherever
      router.replace("/");
    }
  }
    return(
       
         <View className="flex-1 items-center justify-center bg-white p-4">
        <Text className="text-2xl font-semibold text-gray-900">
        Login In
    </Text>
        <TextInput style={{ borderWidth: 1, borderColor: "#ccc", width: "80%", marginBottom: 12, padding: 8 }}
 placeholder='Enter Your Email' value={email}  onChangeText={setEmail}/>
          <TextInput style={{ borderWidth: 1, borderColor: "#ccc", width: "80%", marginBottom: 12, padding: 8 }}
 placeholder='Enter Your Password' value={password} onChangeText={setPassword}/>
 <Button title="Login In" onPress={handleSignIn} ></Button>
 </View>
        
    )

    }