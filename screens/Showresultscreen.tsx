import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoCard from "../components/InfoCard";

const Showresultscreen = () => {
  const route = useRoute();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [indicator, setIndicator] = useState(true);
  // var setloading = true;

  useEffect(() => {
    // console.log(date);
    const { date, pincode } = route.params;

    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 Edg/90.0.818.51",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.centers);
      // setLoading(false);
        // console.log(json.centers)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if(data==null)
  {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#4da6bd', fontSize: 20, }}>No Record</Text>
      </View>
      
    )
  }

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <InfoCard center={item.name} sessions={item.sessions}  address = {item.address}
              fee_type={item.fee_type} />
            )}
            keyExtractor={(item) => String(item.center_id)}
          />
        )}
      </View>
    );
  
};



export default Showresultscreen;
