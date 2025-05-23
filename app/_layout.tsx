import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return <Stack initialRouteName="login">
    <Stack.Screen name="login" options={{ headerShown: false }} />
    <Stack.Screen name="layout-comprador" options={{ headerShown: false }} />
    <Stack.Screen name="layout-vendedor" options={{ headerShown: false }} />
  </Stack>;
}
