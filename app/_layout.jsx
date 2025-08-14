import { Stack } from "expo-router";

export default function RootLayout() {
  // return <Stack />;
  return(
    // Desativando meu padrao
  <Stack>
    <Stack.Screen name="index" options={{title: '', headerTransparent: true, headerShown: false}}/>
  </Stack>
  )
}
