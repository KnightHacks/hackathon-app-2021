import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, DarkTheme } from '@react-navigation/native';

export interface ErrorMsgContainerProps {
  message: string;
}

function ErrorMsgContainer({ message }: ErrorMsgContainerProps) {
  const baseStyle = StyleSheet.create({
    base: {
      fontSize: 24,
      fontWeight: '500',
      textAlign: 'center',
      paddingHorizontal: 10,
    },
  });

  let fontColor =
    useTheme() == DarkTheme ? { color: '#FFFFFF' } : { color: '#000000' };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%',
      }}
    >
      <Text
        style={{
          ...baseStyle.base,
          ...fontColor,
        }}
      >
        {message}
      </Text>
    </View>
  );
}

export default ErrorMsgContainer;
