import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import MyComponent from '../screens/MyComponent';
import Header from '../screens/header';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buildingName, setBuildingName] = useState(''); // Corrected the variable name
  const [roomName, setRoomName] = useState(''); // Corrected the variable name
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Building Name:', buildingName);
    console.log('Room Name:', roomName);
    navigation.navigate('MyComponent');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/group4.png')} // Update the path accordingly
        style={styles.image}
      />
      <Header title="Welcome to Time Quest" />
      <Text>User Name:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)} // Corrected the function name
        placeholder="ajournalofmemories123"
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="*******"
        secureTextEntry={true}
      />
      <Text>Building name</Text>
      <TextInput
        style={styles.input}
        value={buildingName}
        onChangeText={(text) => setBuildingName(text)}
        placeholder="Commons"
      />
      <Text>Room name</Text>
      <TextInput
        style={styles.input}
        value={roomName}
        onChangeText={(text) => setRoomName(text)}
        placeholder="961"
      />
      <Button title="Create account" onPress={handleSubmit} />
    </View>
  );
};

export default Login;   