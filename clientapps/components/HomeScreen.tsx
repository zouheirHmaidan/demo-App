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
    Alert
  } from 'react-native';

  import Input from './Input';


export function HomeScreen() {
    return (
      <View>
      <Input />
      </View>
    )
  } 