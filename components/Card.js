import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import weightImg from '../assets/weight.png'
import heightImg from '../assets/height.png'
import * as Progress from 'react-native-progress';
import theme from "../theme"
const imageurl = "https://firebasestorage.googleapis.com/v0/b/pokedex-bb36f.appspot.com/o/pokemon_images%2F2CF15848-AAF9-49C0-90E4-28DC78F60A78?alt=media&token=15ecd49b-89ff-46d6-be0f-1812c948e334"
 


const Card = ({ navigation, route }) =>{

    const colorpicker =()=>{
        const color = theme[route.params.type]
        return color != null ? color : 'rgb(194, 46, 40)'
    }

  return(
    <View style={[styles.container ,{backgroundColor:colorpicker()}]}>
    
    <View style={styles.cardView}>
      <Image source={{uri: route.params.imageUrl}} style={styles.imageView}/>
      <Text style ={styles.textstyle}>{route.params.name}</Text>
      <Text style ={[styles.pokiTextType , {backgroundColor:colorpicker()}]}>{route.params.type}</Text>

      <View style={{display:'flex',flexDirection:'row',width:230 ,justifyContent:'space-between',alignItems:'baseline'}}>
        <Image source ={weightImg} style={{height:70 , width:70,}}/>
        <Image source ={heightImg} style={{height:50 , width:20,marginRight:"10%"}}/>
      </View>

      <View style={{display:'flex',flexDirection:'row',width:230 ,justifyContent:'space-between'}}>
      <Text style ={styles.textstyle} >{route.params.weight}lbs</Text>
      <Text style ={styles.textstyle} >{route.params.height}m</Text>
      </View>

      <View style={{display:'flex',flexDirection:'row',width:230 ,justifyContent:'space-between'}}>
      <Text style={styles.textstyle,[{fontSize:20,marginTop:"5%"}]}>Base stats:</Text>
      </View>

      <View style={{display:'flex',width:230 ,justifyContent:'space-between'}}>
      <Text style={styles.textstyle,[{fontSize:20,marginTop:"5%"}]}>Attack</Text>
      <Progress.Bar progress={(route.params.attack/100)} width={250} height ={20} borderRadius ={40} color={'red'} />
      <Text style={styles.textstyle,[{fontSize:20,marginTop:"5%"}]}>Defence</Text>
      <Progress.Bar progress={(route.params.defense/100)} width={250} height ={20} borderRadius ={40} color={'purple'} />
      </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center'
  },
  cardView:{
    display:'flex',
    alignItems:'center',
    backgroundColor:'white',
    width:370,
    height:550,
    borderRadius:20,
    marginTop:"25%"
  },
  imageView:{
    width:150 ,
    height:150,
    marginTop:-80
  },
  textstyle:{
    fontSize:30,
    fontFamily:'Roboto',

  },
  pokiTextType:{
    fontSize:20,
    backgroundColor:'pink',
    textAlign:'center',
    borderRadius:20,
    width:130,
    height:30,
    marginTop:10
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }

})



export default Card;
