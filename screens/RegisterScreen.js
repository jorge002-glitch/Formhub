import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import ButtonPrimary from '../components/ButtonPrimary';

export default function RegisterScreen() {
  const { actions } = useAuth();
  const [name, setName] = useState('Nombre Usuario');
  const [email, setEmail] = useState('usuario@uttab.mx');
  const [password, setPassword] = useState('123456');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#7c8aa5" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Correo" placeholderTextColor="#7c8aa5" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#7c8aa5" secureTextEntry value={password} onChangeText={setPassword} />
      <ButtonPrimary label="Crear cuenta" onPress={() => actions.register(name, email)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { color: '#e6eef8', fontSize: 24, fontWeight: '700', marginBottom: 12 },
  input: { backgroundColor: '#141823', color: '#e6eef8', borderColor: '#1c2230', borderWidth: 1, borderRadius: 10, padding: 12, marginVertical: 8 },
});