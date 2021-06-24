import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';


export type infotextprops ={
   text: string
   color: string
}
const Textt = (props: infotextprops)=>{
    return (
        <View style={styles.cont}>
            <Text style={styles.title}>
           <Fontisto name = "injection-syringe" size={30}  style={{ marginBottom: -3 }} color={props.color}/>  {props.text} </Text>
      </View>
    )
}
export default Textt;