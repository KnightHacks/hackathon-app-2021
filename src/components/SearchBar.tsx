import React from 'react';
import { TextInput, View } from 'react-native';

export interface SearchBarProps {
  onChangeText?: (e: string) => void;
}

export default function SearchBar({ onChangeText }: SearchBarProps) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#dedee3',
        borderRadius: 10,
        margin: 10,
      }}
    >
      <TextInput
        placeholder="Search"
        onChangeText={onChangeText}
        style={{ fontSize: 16 }}
      />
    </View>
  );
}
