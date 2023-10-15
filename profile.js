import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // In a real app, this is where you would send data to your backend to update the user's information.
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/unnamed.png')} style={styles.profileImage} />

      {editing ? (
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      ) : (
        <Text style={styles.text}>{name}</Text>
      )}

      {editing ? (
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      ) : (
        <Text style={styles.text}>{email}</Text>
      )}

      {editing ? (
        <Button title="Save" onPress={handleSave} />
      ) : (
        <TouchableOpacity onPress={() => setEditing(true)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  editButton: {
    color: 'blue',
  },
});

export default Profile;
