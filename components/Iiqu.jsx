import { View, Text } from 'react-native';
import { styles } from '../style';


const Iiqu = () => {
  return (
      <View style={styles.iquwrapper}>
        <View style={{width: '50%'}}>
          <Text style={styles.iqu}>Item</Text>
        </View>
        <View style={{width: '30%'}}>
          <Text style={styles.iqu}>Quantidade</Text>
        </View>
        <View style={{width: '20%'}}>
          <Text style={styles.iqu}>Unidade</Text>
        </View>
      </View>
  )
}


export default Iiqu;