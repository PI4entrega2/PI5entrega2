import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';
import Checkbox from './Checkbox.jsx';



const Listafinal = (props) => {

  
  return (
      <View>
        <View style={styles.itemwrapper}>
          <View style={styles.itemcolumn} >
            {props.item.map((item, index) => {
              return (
                <View style={styles.checkboxwrapper} key={index}>
                  <Checkbox />
                  <Text style={styles.itemcheckbox} >{item}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.quantidade}>
            {props.quantidade.map((quantidade, index) => {
              return (
                <View style={styles.quantidadee} key={index}>
                  <Text style={styles.item}>{quantidade}</Text>
                </View>                
              );
            })}
          </View>
          <View style={styles.unidade}>
            {props.unidade.map((unidade, index) => {
              return (
                <View style={styles.unidadee} key={index}>
                  <Text style={styles.item}>{unidade}</Text>
                </View>                
              );
            })}
          </View>              
        </View>
      </View>
  )
}





export default Listafinal;