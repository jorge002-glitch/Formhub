import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary';

export default function PasswordRecoveryScreen() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar contraseña</Text>
      {!sent ? (
        <>
          <TextInput style={styles.input} placeholder="Correo" placeholderTextColor="#7c8aa5" value={email} onChangeText={setEmail} />
          <ButtonPrimary label="Enviar enlace" onPress={() => setSent(true)} />
        </>
      ) : (
        <Text style={styles.info}>Hemos enviado un enlace (simulado) a tu correo.</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { color: '#e6eef8', fontSize: 24, fontWeight: '700', marginBottom: 12 },
  input: { backgroundColor: '#141823', color: '#e6eef8', borderColor: '#1c2230', borderWidth: 1, borderRadius: 10, padding: 12, marginVertical: 8 },
  info: { color: '#b8c2d9', marginTop: 12 },
});