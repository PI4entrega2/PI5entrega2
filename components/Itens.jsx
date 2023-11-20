import { View, Text } from 'react-native';
import { styles } from '../style';


const Itens = (props) => {
  return (
      <View>
        <View style={styles.itemwrapper}>
          <View style={styles.itemcolumn}>
            {props.item.map((item, index) => {
              return (
                <View style={styles.itemm} key={index}>
                  <Text style={styles.item} >{item}</Text>
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





export default Itens;