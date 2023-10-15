import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import style from '../style';

const MyComponent = () => {
  const navigation = useNavigation(); // Define the navigation object

  const handleDashboard = () => {
    navigation.navigate('Dashboard'); // Use the navigation object to navigate
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/memoji.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Welcome @purvipatidar!</Text>
      <Button title="Go to Dashboard" onPress={handleDashboard} />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#89CFF0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },
  image: {
    width: 300,
    height: 250,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
};

export default MyComponent;
