// screens/SubjectMenuScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SubjectMenuScreen({ navigation }) {
  const { subjects } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Materias</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Formulas', { subjectId: item.id, title: item.name })}>
            <Text style={styles.cardTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingVertical: 12 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { color: '#e6eef8', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  card: { backgroundColor: '#141823', borderColor: '#1c2230', borderWidth: 1, borderRadius: 12, padding: 16, marginBottom: 12, width: '48%' },
  cardTitle: { color: '#08b6d8', fontWeight: '700' },
});