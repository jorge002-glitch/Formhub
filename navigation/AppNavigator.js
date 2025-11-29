import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import SubjectMenuScreen from '../screens/SubjectMenuScreen';
import FormulaTableScreen from '../screens/FormulaTableScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedFormulasScreen from '../screens/SavedFormulasScreen';
import CustomFormScreen from '../screens/CustomFormScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: { backgroundColor: '#12151b' },
        headerTitleStyle: { color: '#e6eef8' },
        tabBarStyle: { backgroundColor: '#12151b', borderTopColor: '#1c2230' },
        tabBarActiveTintColor: '#08b6d8',
        tabBarInactiveTintColor: '#7c8aa5',
        tabBarIcon: ({ color, size }) => {
          const map = { Inicio: 'grid', Perfil: 'person-circle', Guardadas: 'folder' };
          const name = map[route.name] || 'apps';
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={SubjectMenuScreen} />
      <Tab.Screen name="Guardadas" component={SavedFormulasScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12151b' },
        headerTitleStyle: { color: '#e6eef8' },
        contentStyle: { backgroundColor: '#0f1115' },
      }}
    >
      {!user ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'FormuHub' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registro' }} />
          <Stack.Screen name="Recover" component={PasswordRecoveryScreen} options={{ title: 'Recuperar contraseña' }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Formulas" component={FormulaTableScreen} options={{ title: 'Fórmulas' }} />
          <Stack.Screen name="CustomForm" component={CustomFormScreen} options={{ title: 'Formulario personalizado' }} />
        </>
      )}
    </Stack.Navigator>
  );
}