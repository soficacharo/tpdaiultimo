
import ImageLogo from './assets/imgs/central_perk_logo.jpeg'
import Card from "./Card";
import React from "react";
import {Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <div style={styles.cosa}>
      <Image source={ImageLogo} style={styles.img}/>
      <div style={styles.card}>
        <Card/>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  img:{
    width:'25rem',
    height: '10rem',
    paddingBottom:'15px',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%'
  },
  card:{
    marginTop:'10rem',
    width:'100%',
    //marginLeft:'2.5rem'
  },
  cosa:{
    justifyContent: 'center'

  }

});
