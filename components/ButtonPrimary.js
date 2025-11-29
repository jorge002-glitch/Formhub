// components/ButtonPrimary.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonPrimary({ label, onPress, disabled }) {
  return (
    <TouchableOpacity style={[styles.btn, disabled && { opacity: 0.6 }]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { backgroundColor: '#08b6d8', padding: 14, borderRadius: 10, alignItems: 'center', marginVertical: 10 },
  text: { color: '#0f1115', fontWeight: '600', fontSize: 16 },
});