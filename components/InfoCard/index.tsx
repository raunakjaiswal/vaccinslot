import React from "react";
import { View, Text, FlatList } from "react-native";
import { SessionType } from "../../types";
import VaccineSession from "../VaccineSession";
import styles from "./styles";

export type InfoCardProps = {
  center: string;
  address: string;
  fee_type: string;
  sessions: SessionType[];
};

const InfoCard = (props: InfoCardProps) => (
  <View style={styles.container}>
    <View style={{backgroundColor: "#f2f2f2", width: '100%', alignItems: 'center',justifyContent: 'center', paddingBottom: 10}}>
    <Text style={styles.center}> Centre name: {props.center}</Text>
    <Text  style={styles.address}>Address: {props.address}</Text>
    <Text style={styles.fee}>  Fee_type: {props.fee_type} </Text>
    </View>
    <FlatList
      data={props.sessions}
      renderItem={({ item }) => <VaccineSession session={item} />}
      keyExtractor={(item) => item.session_id}
    />
  </View>
);

export default InfoCard;
