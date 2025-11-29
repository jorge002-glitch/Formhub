// screens/FormulaTableScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import FormulaCard from '../components/FormulaCard';
import ButtonPrimary from '../components/ButtonPrimary';

export default function FormulaTableScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { subjectId, title } = route.params || {};
  const { formulasBySubject } = useAuth();
  const items = formulasBySubject[subjectId] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={({ item }) => <FormulaCard item={item} />} />
      <ButtonPrimary label="Crear formulario con estas fórmulas" onPress={() => navigation.navigate('CustomForm', { items })} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { color: '#e6eef8', fontSize: 22, fontWeight: '700', marginBottom: 12 },
});