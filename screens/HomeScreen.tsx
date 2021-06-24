import { useNavigation } from '@react-navigation/native';
import  React , {useState} from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function HomeScreen() {

  // function getFormattedDate() {
  //   var year = new Date(). getFullYear();
   
  //   var month = (new Date(). getMonth() + 1).toString();
  //   month = month.length > 1 ? month : '0' + month;
  
  //   var day =  new Date(). getDate().toString();
  //   day = day.length > 1 ? day : '0' + day;
    
  //   return month + '-' + day + '-' + year;
  // }

  const [pincode, setpincode] = useState('');
  const [date,setdate] = useState('10-05-2021')
  const navigation  = useNavigation();

  const OnPress=()=>{
    // console.warn(  `Album press: ${props.album.artist}`);
    navigation.navigate('Showresultscreen', {pincode: pincode,date: date} )
}


  return (
    <ScrollView style={{ flex: 1, }}>
      <View style={styles.imgcontainer}>
       
         <Image style={styles.img}source={{uri: 'https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yale-medicine/live-prod/ym_new/images/da871803-afd1-4284-af61-e87314b6acad_tcm990-397624.jpg'}}/>
         <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>Check availability of slots</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Pincode</Text>
        <TextInput  keyboardType = 'numeric' style={styles.input} placeholder='Pincode' onChangeText= {(val)=>
        setpincode(val)
        }/>
        <Text style={styles.title}>Enter Date</Text>
        <TextInput keyboardType = 'numeric' style={styles.input} placeholder='dd-mm-yyyy'
        onChangeText= {(val)=>
          setdate(val)
          }/>
          <TouchableWithoutFeedback onPress={OnPress}>
          <View  style={{height: 30, width: 200, backgroundColor: 'black', marginTop: 30, alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{color: 'white'}}>check</Text>
           </View>
          </TouchableWithoutFeedback>
      
      </View>
    </ScrollView>
  );
}

const styles= StyleSheet.create({
  imgcontainer:{
    height: 220,
    // flex: -1
    alignItems: 'center',
    marginTop: 0
    
  },
    container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      marginTop: 25

    },
    title: {
       color: 'black',
       fontSize: 15,
       fontWeight: 'bold',
       marginTop: 25,
       paddingBottom: 10
    
      
    },
    input: {
      height: 30,
      width: 200,
      borderWidth: 1,
      borderColor: 'black',
      padding: 1,
      margin: 2,
      // marginTop: 10
    },

    img: {
      height: '100%',
      width: '100%'
    }

})