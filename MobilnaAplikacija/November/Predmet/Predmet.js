import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';
import Ispiti from "./Ispiti";
export default class Predmet extends Component {
  render() {
 //     console.log(this.props);
    const {title, profesor, ECTS, asistenti,ispiti}=this.props.navigation.state.params;
    console.log(ispiti);
    return (
    <View>
      <Text style={style.text}>Naziv predmeta: {title}</Text>
      <Text style={style.text}>Ime profesora: {profesor}</Text>
      <Text style={style.text}>Broj ECTS bodova: {ECTS}</Text>
      <Text style={style.text}>Asistenti: {asistenti} </Text>
      <Ispiti ispiti={ispiti} />
       
     
    </View>
    )
  }
}
const style=StyleSheet.create({
    text:{
        fontSize:20
    }
})
