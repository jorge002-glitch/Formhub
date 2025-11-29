// screens/CustomFormScreen.js
import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import FormulaCard from '../components/FormulaCard';
import ButtonPrimary from '../components/ButtonPrimary';

export default function CustomFormScreen() {
  const route = useRoute();
  const { id, items: initialItems } = route.params || {};
  const { savedForms, actions } = useAuth();
  const existing = useMemo(() => savedForms.find(f => f.id === id), [id, savedForms]);
  const [title, setTitle] = useState(existing?.title || 'Formulario personalizado');
  const [items, setItems] = useState(existing?.items || initialItems || []);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setItems(existing.items);
    }
  }, [existing]);

  const removeItem = (idx) => setItems(prev => prev.filter((_, i) => i !== idx));

  const save = () => {
    if (existing?.id) actions.updateCustomForm(existing.id, { title, items });
    else actions.saveCustomForm(title, items);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Título del formulario"
        placeholderTextColor="#7c8aa5"
      />
      <FlatList
        data={items}
        keyExtractor={(item, idx) => item.id || String(idx)}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <FormulaCard item={item} />
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.remove}>Quitar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No hay fórmulas en este formulario.</Text>}
      />
      <ButtonPrimary label="Guardar cambios" onPress={save} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titleInput: { backgroundColor: '#141823', color: '#e6eef8', borderColor: '#1c2230', borderWidth: 1, borderRadius: 10, padding: 12, marginBottom: 12 },
  row: { marginBottom: 8 },
  remove: { color: '#ff6b6b', marginTop: 6 },
  empty: { color: '#7c8aa5' },
});