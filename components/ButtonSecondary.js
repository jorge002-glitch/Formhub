// components/ButtonSecondary.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonSecondary({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { backgroundColor: '#1a1f2a', padding: 14, borderRadius: 10, alignItems: 'flex-start', marginVertical: 8 },
  text: { color: '#e6eef8', fontSize: 15 },
});