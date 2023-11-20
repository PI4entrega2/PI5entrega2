import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { styles } from '../style';
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Iiqu from '../components/Iiqu.jsx';



export default function Adicionar({navigation}){
    
    const { itens, setItens, quants, setQuants, unids, setUnids } = useContext(AuthContext)

    const [item, setItem] = useState([]);
    const [quant, setQuant] = useState([]);
    const [unid, setUnid] = useState([]);    
    

    const handleAdicionar = () => {
        setItens([...itens, item]);
        setQuants([...quants, quant]);
        setUnids([...unids, unid]);
        navigation.navigate('Criarlista')
    }



    return(
        <View style={styles.container}>
      
            <View style={styles.criarone} >

                <Text style={styles.title}> PI </Text>
                
                <Pressable onPress={() => navigation.navigate('Entrada')} style={styles.cross}>
                    <FontAwesome5 name="home" size={36} color="white" />
                </Pressable>
       
            </View>

            <View style={styles.criartwo} >
            
                <Text style={{color: '#001D4A', fontSize: 36, fontWeight: '700'}}> Adicionar Item </Text>

            </View>

            <View style={styles.criarthree}>

                <Iiqu /> 

                <View style={styles.itemwrapper}>
                    <View style={{width: '50%'}}>
                        <TextInput style={styles.itemm} value={item.toString()} onChangeText={text => setItem(text)}></TextInput>
                    </View>
                    <View style={styles.quantidade}>
                        <View style={styles.quantidadee}>
                            <TextInput style={styles.item} inputMode="numeric" value={quant.toString()} onChangeText={text => setQuant(text)} ></TextInput>
                        </View>                
                    </View>
                    <View style={styles.unidade}>
                        <View style={styles.unidadee}>
                            <TextInput style={styles.item} value={unid.toString()} onChangeText={text => setUnid(text)}></TextInput>
                        </View>                
                    </View>
                </View>
            

    

            </View>

            <View style={styles.criarfour} >
            
                <Pressable style={styles.botaocriar} onPress={() => navigation.navigate('Criarlista')}>
                    <Text style={{color: '#0F1A29', fontSize: 20, fontWeight: '700'}}>Cancelar</Text>
                </Pressable>
                
                <Pressable style={styles.botaocriar} onPress={() => handleAdicionar()}>
                    <Text style={{color: '#0F1A29', fontSize: 20, fontWeight: '700'}}>Adicionar</Text>
                </Pressable>

            </View>

            



    </View>
    )
}

