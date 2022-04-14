import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert, Modal, Pressable
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react';
import axios from 'axios';
import prompt1 from 'react-native-prompt-android';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Input = ({navigation}: any) => {
  const {navigate} = useNavigation();
  const [clients, listOfClients] = useState<any>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newadd, setAdd] = useState('')

  const updateClients = (id:string, newAddress:string) => { 
    axios.put('http://192.168.0.125:3001/client/updateClient', {newAddress:newAddress, id:id})
    navigate({name: 'Home', key: 'Home'} as never)
  }

  const createClient = () => {
    console.log('User Created');
    axios
      .post('http://192.168.0.125:3001/client/createClient', {
        name,
        email,
        age,
        phone,
        address,
      })
      .then(result => {
        listOfClients([
          ...clients,
          {
            name,
            email,
            age,
            phone,
            address,
          },
        ]);
      });
  };

  const deleteClients = (id: string) => {
    axios.delete(`http://192.168.0.125:3001/client/deleteClient/${id}`);
  };

  useEffect(() => {
    axios
      .get('http://192.168.0.125:3001/client/getClients')
      .then(result => listOfClients(result.data))
      .catch((err: string) => console.log(err));
  }, [createClient, deleteClients]);

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(text: string) => setName(text)}
          value={name}
          style={styles.nameinput}
        />

        <TextInput
          placeholder="email"
          onChangeText={(text: string) => setEmail(text)}
          style={styles.nameinput}
          value={email}
        />

        <TextInput
          placeholder="age"
          keyboardType="numeric"
          onChangeText={(text: any) => setAge(text)}
          value={age.toString()}
          style={styles.nameinput}
        />

        <TextInput
          placeholder="phone"
          onChangeText={(text: string) => setPhone(text)}
          value={phone}
          style={styles.nameinput}
        />
        <TextInput
          placeholder="address"
          onChangeText={(text: string) => setAddress(text)}
          value={address}
          style={styles.nameinput}
        />
        <Button title="submit" onPress={createClient} />

        <View>
          {clients.map((client: any) => {
            return (
              <View style={styles.get}>
                <Text>{client.name}</Text>
                <Text>{client.email}</Text>
                <Text>{client.age}</Text>
                <Text>{client.phone}</Text>
                <Text>
                  {client.address} {'\n'}
                </Text>
                <Button
                  title="delete"
                  onPress={() => deleteClients(client._id)}
                />

          <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View>
        <TextInput 
          placeholder='Update address'
          onChangeText={(text:string) => setAdd(text)}
          value={newadd}
        />
        <Button 
          title='submit'
          onPress={() => updateClients(client._id, newadd)}
        />
        </View>
        </Modal>

                <Button
                  title="update"
                  onPress={() => 
                    setModalVisible(true)
                  }
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameinput: {
    width: 300,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 15,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 50,
  },
  get: {
    borderBottomWidth: 3,
    marginTop: 5,
  },
  body: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
  },
});




export default Input;
