import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
/*  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [par, setPar] = useState<number[]>([]);
  const [impar, setImpar] = useState<number[]>([]);

  const Cnumeros = () => {
    const paresTemp: number[] = [];
    const imparesTemp: number[] = [];

    numeros.forEach(numero => {
      if (numero % 2 === 0) {
        paresTemp.push(numero);
      } else {
        imparesTemp.push(numero);
      }
    });

    setPar(paresTemp);
    setImpar(imparesTemp);
  };*/

  return (
    /*<View style={styles.container}>
      <Text style={styles.header}>BIENVENIDO</Text>
      <Text style={styles.subheader}>Vector: {numeros.join(', ')}</Text>
      <Button title="CLASIFICAR" onPress={Cnumeros} />
      <Text style={styles.result}>Pares: {par.join(', ')}</Text>
      <Text style={styles.result}>Impares: {impar.join(', ')}</Text>
      <StatusBar style="auto" />
    </View>
  );*/

<View style={styles.container}>
      <View style={styles.azul} />
      <View style={styles.naranja} />
      <View style={styles.celeste} />
    </View>


)}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },*/


  //Ejercicio 1
/*
  container: {
    flex: 1,
    backgroundColor: '#28425b', 
    justifyContent: 'center',
    alignItems: 'flex-end',
  
  },
  azul: {
    width: 50,
    height: 50,
    backgroundColor: '#5855d6', 
    
    borderWidth:5,
    borderColor: "#FFFFFF"
    

  },
  naranja: {
    width: 50,
    height: 550,
    backgroundColor: '#F39C12', 
 borderWidth:5,
    borderColor: "#FFFFFF"
  },
celeste: {
    width: 50,
    height: 50,
    backgroundColor: '#28c4da', 
     borderWidth:5,
    borderColor: "#FFFFFF"
  },

 */



  //Figura 2
/*
  container: {
    flex: 1,
    backgroundColor: '#28425b', 
    justifyContent: 'center',
    alignItems: 'flex-start',
  
  },
  azul: {
    width: 50,
    height: 50,
    backgroundColor: '#5855d6', 
    
    borderWidth:5,
    borderColor: "#FFFFFF"
    

  },
  naranja: {
    width: 50,
    height: 50,
    backgroundColor: '#F39C12', 
 borderWidth:5,
    borderColor: "#FFFFFF"
  },
celeste: {
   width: 390,
    height: 50,
    backgroundColor: '#28c4da', 
     borderWidth:5,
    borderColor: "#FFFFFF"
  },
 */

  //Figura 3

/*
  container: {
    flex: 1,
    backgroundColor: '#28425b', 
    justifyContent: 'center',
    alignItems: 'flex-start',
  
  },
  azul: {
    width: 80,
    height: 80,
    backgroundColor: '#5855d6', 
    alignSelf:'flex-end',
    borderWidth:5,
    borderColor: "#FFFFFF"
    

  },
  naranja: {
    width: 80,
    height: 80,
    backgroundColor: '#F39C12', 
 borderWidth:5,
    borderColor: "#FFFFFF"
  },
celeste: {
  width: 80,
  height: 80,
    backgroundColor: '#28c4da',
    alignSelf:'center',
     borderWidth:5,
    borderColor: "#FFFFFF"
  },
*/

//Figura 4
  /*
  container: {
    relative: 1,
    backgroundColor: '#28425b', 
    justifyContent: 'center',
    alignItems: 'flex-start',
  
  },
  azul: {
    width: 80,
    height: 80,
    backgroundColor: '#5855d6', 
    alignSelf: 'flex-start',
    marginTop: 10,
    borderWidth:5,
    borderColor: "#FFFFFF"
    

  },
  naranja: {
    width: 80,
    height: 80,
    backgroundColor: '#F39C12', 
    alignSelf: 'center',
    marginTop: 180,
 borderWidth:5,
    borderColor: "#FFFFFF"
  },
celeste: {
   width: 80,
    height: 80,
    backgroundColor: '#28c4da', 
    alignSelf: 'flex-end',
    marginTop: 220,
         borderWidth:5,
    borderColor: "#FFFFFF"
  }, */

//Figura 5
/*

  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  azul: {
    width: 80,
    height: 650,
    backgroundColor: '#5855d6',
    borderWidth: 5,
    alignSelf: 'flex-start',

    borderColor: '#FFFFFF',
    margin: 5,
  },
  naranja: {
    width: 80,
    height: 650,
    backgroundColor: '#F39C12',
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    margin: 5,
  },
  celeste: {
    width: 80,
    height: 650,
    backgroundColor: '#28c4da',
    borderWidth: 5,
    alignSelf: 'flex-end',
    borderColor: '#FFFFFF',
    margin: 5,
  }, */


  //figura 6

/*
   container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  azul: {
    width: 380,
    height: 200,
    backgroundColor: '#5855d6',
    borderWidth: 10,    
    borderColor: '#FFFFFF',
    margin: 5,
  },
  naranja: {
    width: 380,
    height: 200,
    backgroundColor: '#F39C12',
   
    borderWidth: 10,
    borderColor: '#FFFFFF',
    margin: 5,
  },
  celeste: {
    width: 380,
    height: 200,
    backgroundColor: '#28c4da',
    borderWidth: 10,
    borderColor: '#FFFFFF',
    margin: 5,
  }, */


//figura 7


/*
container: {
  flex: 1,
  backgroundColor: '#28425b',
  justifyContent: 'center',
  alignItems: 'center'
},
azul: {
  width: 70,
  height: 70,
  backgroundColor: '#5855d6',
  borderWidth: 5,
  borderColor: '#FFFFFF',
},
naranja: {
  width: 70,
  height: 70,
  backgroundColor: '#F39C12',

  borderWidth: 5,
  borderColor: '#FFFFFF',
},
celeste: {
  width: 70,
  height: 70,
  backgroundColor: '#28c4da',
  borderWidth: 5,
  borderColor: '#FFFFFF',
}, 

*/


  //Figura 8
  
/*  
container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  azul: {
    width: 70,
    height: 70,
    backgroundColor: '#5855d6',
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  naranja: {
    width: 70,
    height: 70,
    backgroundColor: '#F39C12',
    left:70,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  celeste: {
    width: 70,
    height: 70,
    backgroundColor: '#28c4da',
    borderWidth: 5,
    borderColor: '#FFFFFF',
  }, */

  //Figura 9

  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  azul: {
    width: 80,
    height: 80,
    backgroundColor: '#5855d6',
    borderWidth: 5,
    alignSelf: 'center',

    borderColor: '#FFFFFF',
  },
  naranja: {
    width: 80,
    height: 80,
    backgroundColor: '#F39C12',
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    top:50,
    
  },
  celeste: {
    width: 80,
    height: 80,
    backgroundColor: '#28c4da',
    borderWidth: 5,
    alignSelf: 'center',
    borderColor: '#FFFFFF',
  },

});
