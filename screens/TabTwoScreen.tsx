import { createIconSetFromIcoMoon, Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import datainfo from '../data/info';
import Textt from '../components/infotext/index'

export default function TabTwoScreen() {
  return (
    <View>
       <FlatList
          data= {datainfo}
          renderItem ={({item})=> <Textt text={item.text} color={item.color} />}
          keyExtractor= {(item)=> item.index}

       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 2,
    padding: 12
   
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
