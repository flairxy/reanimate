import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="panGesture" options={{ headerShown: false }} />
      <Stack.Screen name="intro" options={{ headerShown: false }} />
      <Stack.Screen
        name="interpolateScrollview"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="interpolateColors" options={{ headerShown: false }} />
      <Stack.Screen name="pinchGesture" options={{ headerShown: false }} />
      <Stack.Screen name="tapGesture" options={{ headerShown: false }} />
      <Stack.Screen name="scrollView" options={{ headerShown: false }} />
      <Stack.Screen name="circularProgressBar" options={{ headerShown: false }} />
      <Stack.Screen name="swipeToDelete" options={{ headerShown: false }} />
      <Stack.Screen name="rippleEffect" options={{ headerShown: false }} />
      <Stack.Screen name="clockLoader" options={{ headerShown: false }} />
      <Stack.Screen name="layoutAnimation" options={{ headerShown: false }} />
      <Stack.Screen name="animatedFlatlist" options={{ headerShown: false }} />
    </Stack>
  );
}
