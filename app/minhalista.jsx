import { Pressable, Text, View, ScrollView } from 'react-native';
import { styles } from '../style';
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Listafinal from '../components/Listafinal.jsx';
import Iiqufinal from '../components/Iiqufinal.jsx';





export default function Minhalista({navigation}){

    const { itens, quants, unids } = useContext(AuthContext)


    

    return(
        <ScrollView style={styles.container}>
            
            <View style={styles.criarone} >

                <Text style={styles.title}> PI </Text>

                <Pressable onPress={() => navigation.navigate('Entrada')} style={styles.cross}>
                    <FontAwesome5 name="home" size={36} color="white" />
                </Pressable>

            </View>

            <View style={styles.criartwo} >
            
                <Text style={{color: '#001D4A', fontSize: 36, fontWeight: '700'}}> Minha Lista </Text>

            </View>

            <View style={styles.criarthree}>

                <Iiqufinal />
                <Listafinal item={itens} quantidade={quants} unidade={unids} />

            </View>

            <View style={styles.criarfour} >
            
                <Pressable style={styles.botaocriar} onPress={() => navigation.navigate('Criarlista')}>
                    <Text style={{color: '#0F1A29', fontSize: 20, fontWeight: '700'}}>Reiniciar</Text>
                </Pressable>
                
                <Pressable style={styles.botaocriar} >
                    <Text style={{color: '#0F1A29', fontSize: 20, fontWeight: '700'}}>Salvar</Text>
                </Pressable>

            </View>

        </ScrollView>
    )
}