import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { SessionType } from "../../types";

export type VaccineSessionProps = {
  session: SessionType;
};
// export type date ={
//   date: string
  
// }
var current_date = new Date(). getDate();
var current_month = new Date(). getMonth() + 1; 
var current_year = new Date(). getFullYear(); 

// console.log(current_date);
// console.log(current_month);
// console.log(current_year);
const checkfunction = (date : string)=>{
  var check = false;
  
  var datee =  parseInt(date.substr(0,2));
  var month = parseInt(date.substr(3,2));
  var year = parseInt(date.substr(6,4));

  
  if(year<current_year)
{
   check = false;
}
else if(year> current_year)
{
  check = true;
}
else
{
  if(month<current_month)
  {
     check = false;
  }
  else if(month>current_month)
  {
    check = true;
  }
  else
  {
    if(datee<current_date)
    {
       check =  false;
    }
    else
    {
       check = true;
    }
  }
}
return check;
}

const VaccineSession = (props: VaccineSessionProps) => {
  const { date, available_capacity, min_age_limit, vaccine } = props.session;
var check = checkfunction(date);

// console.log(date.substr(0,2));

// console.log(check)
// if(check===true)
// {
  if(check==true)
  {
  if(available_capacity>0)
  {
  return (
    <View style={styles.containergreen}>
    <View>
        <Text >Date : {date}</Text>
        <Text style={styles.available}>Available: {available_capacity}</Text>
        </View>
        <View>
        <Text >Age Limit: {min_age_limit}</Text>
        <Text >{vaccine}</Text>
        </View>
    </View>
  );
  }
  else
  {
    return (
      <View style={styles.container}>
        <View>
        <Text >Date : {date}</Text>
        <Text style={styles.available}>Available: {available_capacity}</Text>
        </View>
        <View>
        <Text >Age Limit: {min_age_limit}</Text>
        <Text >{vaccine}</Text>
        </View>
      </View>
    );
  }

}
else
{
  return (
    <View style={styles.containerred}>
       <View>
        <Text >Date : {date}</Text>
        <Text style={styles.available}>Available: {available_capacity}</Text>
        </View>
        <View>
        <Text >Age Limit: {min_age_limit}</Text>
        <Text >{vaccine}</Text>
        </View>
    </View>
  );
}
};
// }

export default VaccineSession;
