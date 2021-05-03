import React , {useEffect,useState} from 'react';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Text,
  Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cardview from '../components/Cardview'
const baseurl = "https://pokedex-bb36f.firebaseio.com/pokemon.json"


const LoadingScreen = () =>{
  return(
    <View style={{display:'flex',flex:1 ,justifyContent:"center" ,alignItems:'center',backgroundColor:'rgb(238, 129, 48)'}}>
      <Text style={{fontSize:40}}>Loading ....</Text>
    </View>
  )
}

const MainScreen = ({ navigation, route }) =>{

  const [pokiData , setpokiData] = useState('')

  const click = (item) =>{
    console.log(item["type"])
    navigation.navigate('detailedScreen', {...item})
  }

  useEffect(async ()=>{
    var tempArray =[]
    var response = await fetch(baseurl)
    response = await response.json()
    Object.keys(response).map(function(key, index) {
     const data = response[index]
     if(data != null){
      tempArray.push({
        "name":data["name"],
        "type":data["type"],
        "attack":data["attack"],
        "defense":data["defense"],
        "description":data["description"],
        "height":data["height"],
        "weight":data["weight"],
        "imageUrl":data["imageUrl"]
      })
     }
    });
    setpokiData(tempArray)
  },[])
  if(pokiData != ''){
    return(
   
      <View style={{backgroundColor:"rgb(237, 218, 218)"}}>
       <SafeAreaView>
           <ScrollView contentContainerStyle={styles.scrollStyle}>
             {pokiData.map((item,key)=>(<TouchableOpacity key = {key} onPress={()=>(click(item))}><Cardview {...item}/></TouchableOpacity>))}
           </ScrollView>
         </SafeAreaView>
      </View>
    
     )
  }
  else{
    return(
      <LoadingScreen/>
    )
  }
}

const styles = StyleSheet.create({
  scrollStyle :{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  }
})
export default MainScreen;
