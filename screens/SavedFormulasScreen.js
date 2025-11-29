// screens/SavedFormulasScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SavedFormulasScreen({ navigation }) {
  const { savedForms, actions } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fórmulas guardadas</Text>
      <FlatList
        data={savedForms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('CustomForm', { id: item.id })}>
              <Text style={styles.name}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => actions.deleteCustomForm(item.id)}>
              <Text style={styles.delete}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Aún no hay formularios guardados.</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { color: '#e6eef8', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  row: { backgroundColor: '#141823', borderColor: '#1c2230', borderWidth: 1, borderRadius: 10, padding: 12, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' },
  name: { color: '#e6eef8', fontWeight: '600' },
  delete: { color: '#ff6b6b' },
  empty: { color: '#7c8aa5', marginTop: 12 },
});