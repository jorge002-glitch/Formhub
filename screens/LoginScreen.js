// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import ButtonPrimary from '../components/ButtonPrimary';

export default function LoginScreen({ navigation }) {
  const { actions } = useAuth();
  const [email, setEmail] = useState('demo@uttab.mx');
  const [password, setPassword] = useState('123456');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMUHUB</Text>
      <TextInput style={styles.input} placeholder="Correo o usuario" placeholderTextColor="#7c8aa5" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#7c8aa5" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity onPress={() => navigation.navigate('Recover')}>
        <Text style={styles.link}>Olvidé la contraseña</Text>
      </TouchableOpacity>
      <ButtonPrimary label="Iniciar sesión" onPress={() => actions.login(email, password)} />
      <ButtonPrimary label="Entrar sin registrarse" onPress={() => actions.login('inv@uttab.mx', '')} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { color: '#e6eef8', fontSize: 28, fontWeight: '800', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#141823', color: '#e6eef8', borderColor: '#1c2230', borderWidth: 1, borderRadius: 10, padding: 12, marginVertical: 8 },
  link: { color: '#08b6d8', marginTop: 8, textAlign: 'center' },
});