import { Pressable, Text, View, ScrollView } from 'react-native';
import { styles } from '../style';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Iiqu from '../components/Iiqu.jsx';
import Itens from '../components/Itens.jsx';



export default function Criarlista({navigation}){

    const { itens, setItens, quants, setQuants, unids, setUnids } = useContext(AuthContext)

    const reiniciarItem = () => {
        let itensCopy = [...itens];
        itensCopy.map((item) => {
            itensCopy.splice(item)
        });
        setItens(itensCopy);
    }
    const reiniciarQuant = () => {
        let quantsCopy = [];
        setQuants(quantsCopy);
    }
    const reiniciarUnid = () => {
        let unidsCopy = [...unids];
        unidsCopy.map((unid) => {
            unidsCopy.splice(unid)
        });
        setUnids(unidsCopy);
    }


    const handleReiniciar = () => {
        reiniciarItem();
        reiniciarQuant();
        reiniciarUnid();        
    }

    return(
        <ScrollView style={styles.container}>
            
            <View style={styles.criarone} >

                <Text style={styles.title}> PI </Text>

                <Pressable onPress={() => navigation.navigate('Entrada')} style={styles.cross}>
                    <FontAwesome5 name="home" size={36} color="white"  />
                </Pressable>

            </View>

            <View style={styles.criartwo} >
            
                <Text style={{color: '#001D4A', fontSize: 36, fontWeight: '700'}}> Criar Lista </Text>

            </View>

            <View style={styles.criarthree}>

                <Iiqu />
                <Itens item={itens} quantidade={quants} unidade={unids} />

            </View>


            <View style={styles.criarfour} >
            
            <Pressable style={styles.botaoadiconar} onPress={() => navigation.navigate('Adicionar')}>
                <AntDesign name="pluscircleo" size={24} color="white" />
                <Text style={{color: '#FFF', fontSize: 20, fontWeight: '400', marginLeft: 30}}>Adicionar Item</Text>
            </Pressable>

            </View>
            
            
            <View style={styles.criarfour} >
            
                <Pressable style={styles.botaocriar} onPress={() => handleReiniciar()}>
                    <Text style={{color: '#0F1A29', fontSize: 20, fontWeight: '700'}}>Reiniciar</Text>
                </Pressable>
                
                <Pressable style={styles.botaocriar} onPress={() => navigation.navigate('Minhalista')}>
                    <Text style={{color: '#0F1A29', fontSize: 20, fontWeight: '700'}}>Salvar</Text>
                </Pressable>

            </View>

        </ScrollView>
    )
}

