import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonSecondary from '../components/ButtonSecondary';
import ButtonPrimary from '../components/ButtonPrimary';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, actions } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.name}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <ButtonSecondary label="Editar perfil (simulado)" onPress={() => {}} />
      <ButtonSecondary label="Fórmulas guardadas" onPress={() => {}} />
      <ButtonSecondary label="Configuración (simulado)" onPress={() => {}} />
      <ButtonPrimary label="Cerrar sesión" onPress={actions.logout} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: '#e6eef8', fontSize: 22, fontWeight: '700' },
  email: { color: '#b8c2d9', marginBottom: 16 },
});