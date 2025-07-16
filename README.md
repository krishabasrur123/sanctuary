# Sanctuary – Student Safety Mobile App

Welcome to **Sanctuary**, a mobile app built with **React Native + Expo** to enhance student safety through secure authentication, user profiles, and seamless mobile access.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/krishabasrur123/sanctuary.git
```
```bash
cd sanctuary
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Development Server
```bash
npx expo start
```

##### This will launch the Expo developer tools. You can open the app in:

+ Expo Go (on your physical device)

+ Android Emulator

+ iOS Simulator (Mac only)

+ A development build (for native modules)

## Technologies Used
- Expo – Cross-platform development framework

- React Native

- Supabase – Backend (Auth, DB, APIs)

- NativeWind – Tailwind CSS for React Native

- Expo Router – File-based navigation

- dotenv – Manage environment variables

## Environment Variables
Create a .env file in the project root with the following:
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
ENV_PUBLIC_GREETING="Welcome!"
ENV_PUBLIC_VERSION="1.0.0"
```
* Note: .env is listed in .gitignore to keep your keys private.

## Project Structure
```
sanctuary/
├── app/                 # Expo Router screens (e.g., index.tsx, login_screen.tsx)
├── components/          # Reusable UI components
├── lib/                 # Supabase client (createClient.ts)
├── constants/           # Global variables
├── assets/              # Fonts and images
├── app.config.js        # Dynamic Expo config with dotenv
├── .env                 # Environment variables (gitignored)
├── README.md

```
## Features
+ User signup & login (Supabase Auth)

+ Profile creation and storage (Supabase DB)

+ Secure session handling

+ Dark/light theme with NativeWind/Tailwind/Postcss

+ File-based navigation with Expo Router
