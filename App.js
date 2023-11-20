import React from 'react';
import Entrada from './app/entrada.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Criarlista from './app/criarlista.jsx';
import Minhalista from './app/minhalista.jsx';
import Adicionar from './app/adicionar.jsx';
import { AuthProvider } from './context/AuthContext.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Entrada" component={Entrada} />
          <Stack.Screen name="Criarlista" component={Criarlista} />
          <Stack.Screen name="Minhalista" component={Minhalista} />
          <Stack.Screen name="Adicionar" component={Adicionar} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}


