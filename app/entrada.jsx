import { Text, View, Image, Pressable } from 'react-native';
import { styles } from '../style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Entrada({navigation}){
    return(
        <View style={styles.container}>
      
            <View style={styles.entradaone} >

                <Text style={styles.title}> PI </Text>
                
                <FontAwesome5 name="home" size={36} color="white" style={styles.cross} />
                
       
            </View>

            <View style={styles.entradatwo} >

                <Image source={require('../assets/images/home.png')} style={{width: '100%'}} />

            </View>
            
            <View style={styles.entradathree} >

                <View style={styles.entradafour}>
                    <Feather name="edit" size={24} color="#001D4A" />
                    <Pressable style={styles.botao}>
                        <Text onPress={() => navigation.navigate('Criarlista')} style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}> Criar Lista </Text>
                    </Pressable>
                </View>

                <View style={styles.entradafour}>
                    <MaterialCommunityIcons name="book-open-page-variant-outline" size={24} color="#001D4A" />
                    <Pressable style={styles.botao}>
                        <Text onPress={() => navigation.navigate('Minhalista')} style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}> Abrir Lista </Text>
                    </Pressable>
                </View>
                
             </View>
    </View>
    )
}

