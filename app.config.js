import 'dotenv/config';

 console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY);
export default () => ({
 
  expo: {
    ...require('./app.json').expo,
     extra: {
      ENV_PUBLIC_GREETING: process.env.ENV_PUBLIC_GREETING,
      ENV_PUBLIC_VERSION: process.env.ENV_PUBLIC_VERSION,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
    plugins: ['expo-font'],
    userInterfaceStyle: "automatic",
    
  },
});
//makes dynamic configuration adding javascript functions
