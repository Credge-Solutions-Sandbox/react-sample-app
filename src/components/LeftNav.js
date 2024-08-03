
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeftNav = ({ items=[] }) => {
  return (
    <View style={styles.nav}>
      {items.map((item, index) => (
        <Text key={index} style={styles.navItem}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    width: 100,
    backgroundColor: '7091E6',
    padding: 10,
  },
  navItem: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default LeftNav;