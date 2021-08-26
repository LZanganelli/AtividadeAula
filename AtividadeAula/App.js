import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const frases = ['Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'O riso � a menor dist�ncia entre duasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss pessoas.',
  'Deixe de lado as preocupa�sssssss�es e seja feliz.',
  'Realize o �bvio, pense no improv�vel e conquiste o imposs�vel.',
  'Acredite em milagres, mas n�o dependa deles.',
  'A maior barreira para o sucesso � o medo do fracasso.',
  'Tomar uma atitude � o primeiro passo para dar vida ao sonho.'
];

const [image,setImage] = useState(require('./images/biscoito.png'));
const [text,setText] = useState('');

function gerarIntAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

  const quebrarBiscoito = () => {
    setText('"' + frases[gerarIntAleatorio(1,frases.length)]);
    setImage(require('./images/biscoitoQuebrado.png'));
  }

  const reiniciarBiscoito = () => {
    setText('');
    setImage(require('./images/biscoito.png'));
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <Image source={require('./images/biscoito.png')} />
      <Text style={styles.text}>{text}</Text>
      <Button color='green' mode="container" onPress={quebrarBiscoito} title="Quebrar Biscoito"></Button>
      <Button color='blue' style={styles.button} mode="contained" onPress={reiniciarBiscoito} title="Tentar Novamente"></Button>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  image:{
    width: 300, height: 430
  },
  text:{
    fontSize:25,
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});