import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../style';

const Dashboard = () => {
    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/dashboard.jpg')}
        style={styles.image}
      />
        <Text style={styles.text}>Hello, Dashboard!</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80,
      // Add additional styling properties here
    },
    image: {
        width: 420,
        height: 895,
      },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      // Add text styling properties here
    },
  });
  
  export default Dashboard;
  
  
  
  
  
  