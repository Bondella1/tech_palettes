import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#89CFF0', // Background color of the header
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    color: 'white', // Text color of the header
    fontSize: 25,
  },
});

export default Header;
