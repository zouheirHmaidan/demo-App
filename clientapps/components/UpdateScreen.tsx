import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    Alert, Modal, Pressable
  } from 'react-native';

  import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { useNavigation } from '@react-navigation/native';
 const Stack = createNativeStackNavigator();

export function UpdateScreen(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
    const {navigate} = useNavigation();
    const [newadd, setAdd] = useState('')
    const updateClients = (id:string, newAddress:string) => { 
      axios.put('http://192.168.0.125:3001/client/updateClient', {newAddress:newAddress, id:id})
      navigate({name: 'Home', key: 'Home'} as never)
    }
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
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
          onPress={() => updateClients(props.route.params.id, newadd)}
        />
        </View>
        </Modal>
      </View>
    )
  }