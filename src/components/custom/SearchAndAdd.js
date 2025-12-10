import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "../../styles/styles";

/**
 * Custom/SearchAndAdd
 * Lets users search existing azkaar and add new ones.
 * Lifts state up via onAdd and onSearch if passed.
 */
export default function SearchAndAdd({ onAdd, onSearch }) {
  const [newZikr, setNewZikr] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = () => {
    if (newZikr.trim()) {
      onAdd?.(newZikr.trim());
      setNewZikr("");
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    onSearch?.(text);
  };

  return (
    <View style={styles.section}>
      <TextInput
        placeholder="🔍 Search zikr..."
        value={searchTerm}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <TextInput
        placeholder="➕ Add new zikr..."
        value={newZikr}
        onChangeText={setNewZikr}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
