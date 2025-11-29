import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FormulaCard({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.formula}>{item.formula}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#141823', borderColor: '#1c2230', borderWidth: 1, borderRadius: 12, padding: 12, marginBottom: 12 },
  name: { color: '#e6eef8', fontWeight: '700', marginBottom: 6 },
  formula: { color: '#08b6d8', fontWeight: '600', marginBottom: 6 },
  desc: { color: '#b8c2d9' },
});