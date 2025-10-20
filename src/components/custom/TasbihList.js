import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 * Displays azkaar with increment/decrement controls.
 */
export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const increment = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, count: it.count + 1 } : it
      )
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id && it.count > 0 ? { ...it, count: it.count - 1 } : it
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="−" onPress={() => decrement(item.id)} />
        <Text style={styles.counter}>{item.count}</Text>
        <Button title="+" onPress={() => increment(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
