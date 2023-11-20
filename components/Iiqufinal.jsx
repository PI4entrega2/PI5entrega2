import { View, Text } from 'react-native';
import { styles } from '../style';
import { Ionicons } from '@expo/vector-icons';


const Iiqufinal = () => {
  return (
      <View style={styles.iquwrapper}>
        <View style={{width: '50%', flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="checkbox" size={24} color="#001D4A" />
          <Text style={styles.iquitem}>Item</Text>
        </View>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <Text style={styles.iqu}>Quantidade</Text>
        </View>
        <View style={{width: '20%', justifyContent: 'center'}}>
          <Text style={styles.iqu}>Unidade</Text>
        </View>
      </View>
  )
}


export default Iiqufinal;