
import React ,{useEffect} from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import theme from "../theme"
// const imageurl = "https://firebasestorage.googleapis.com/v0/b/pokedex-bb36f.appspot.com/o/pokemon_images%2F2CF15848-AAF9-49C0-90E4-28DC78F60A78?alt=media&token=15ecd49b-89ff-46d6-be0f-1812c948e334"


const CardView = ({imageUrl , name,type ,attack,  defense,  description ,height, weight}) =>{

    const colorpicker =()=>{
        const color = theme[type]
        return color != null ? color : 'rgb(194, 46, 40)'
    }

  return(
    <View style = {[styles.card ,{backgroundColor:colorpicker()}]}>
    <Image source={{uri: imageUrl}} style={styles.imageView}/>
    <Text style ={styles.textStyle}>{name}</Text>
    <Text style ={[styles.pokiTextType ,{textShadowColor:colorpicker()}]}>{type}</Text>
   </View>
  )
}





const styles = StyleSheet.create({
  card:{
    backgroundColor:0xFFA8A78A,
    height:200,
    width: 180 ,
    display:'flex',
    alignItems:'center',
    marginTop:10,
    borderRadius:20
   
  },
  imageView:{
    height: 120, 
    width: 120
  },
  textStyle:{
    fontSize:20,
    fontFamily:'Roboto'
  },
  pokiTextType:{
    fontSize:20,
    textAlign:'center',
    borderRadius:20,
    width:130,
    height:30,
    marginTop:10,
    shadowColor: '#daeae7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 3,

  }
})


export default CardView;
