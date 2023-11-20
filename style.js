import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#FFF',
    },
    
    title: {
      color: '#FFF',
      fontSize: 40,
      fontWeight: '400',
      
    },
    
    cross: {
        position: 'absolute',
        right: 20
      },
  
    entradaone: {
        height: 95,
        backgroundColor: '#006992',
        alignItems: 'center',
        justifyContent: 'center',    
    },
  
    entradatwo: {
      flex: 5,
    },
  
    entradathree: {
      flex: 7,
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    entradafour: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    botao: {
        backgroundColor: '#006992',
        width: 300,
        height: 45,
        borderRadius: '20px',
        alignItems: 'center',
        justifyContent: 'center',  
        marginTop: 14,
      },
    
    criarone: {
        height: 95,
        backgroundColor: '#006992',
        alignItems: 'center',
        justifyContent: 'center',
    },

    criartwo: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },

    criarthree: {
        flex: 5,
    },

    categoria: {
      color: '#006992',
      fontSize: 20,
      fontWeight: '700',
      marginTop: 30,
      marginBottom: 45,
      paddingBottom: 9,
      marginLeft: 14,
      marginRight: 20,
      borderColor: '#FFF',
      borderBottomColor: '#ECA400',
      borderWidth: 1,
  },

  iquwrapper: {
      marginLeft: 14,
      marginRight: 7,
      marginBottom: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },

  iqu: {
    color: '#001D4A',
    fontSize: 16,
    fontWeight: '700',
  },

  iquitem: {
    color: '#001D4A',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 4,
  },

  itemwrapper: {
    marginLeft: 14,
    marginRight: 7,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
},

itemcolumn: {
  width: '50%',
  flexDirection: 'column',
},

  item: {
    color: '#001D4A',
    fontSize: 15,
    fontWeight: '500',
  },

  checkboxwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
    marginBottom: 22,
    height: 25,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#252F3C',
    backgroundColor: 'rgba(0, 105, 146, 0.25)',
  },

  itemcheckbox: {
    color: '#001D4A',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 7,
  },

  itemm: {
    marginBottom: 22,
    height: 25,
  },

  quantidade: {
    width: '30%',
    alignItems: 'center',
    paddingRight: '5%',
  },

  quantidadee: {
    paddingLeft: 6,
    marginBottom: 22,
    width: 60,
    height: 25,
    backgroundColor: 'rgba(0, 105, 146, 0.25)',
    borderRadius: 30,
    paddingRight: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  unidade: {
    width: '20%',
    alignItems: 'center',
  },

  unidadee: {
    paddingLeft: 6,
    marginBottom: 22,
    width: 60,
    height: 25,
    backgroundColor: 'rgba(0, 105, 146, 0.25)',
    borderRadius: 30,
    paddingRight: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  criarfour: {
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
},

botaocriar: {
  backgroundColor: '#ECA400',
  width: 150,
  height: 45,
  borderRadius: '20px',
  alignItems: 'center',
  justifyContent: 'center',  
},

botaoadiconar: {
  backgroundColor: '#006992',
  width: 300,
  height: 45,
  borderRadius: '20px',
  alignItems: 'center',
  justifyContent: 'center', 
  flexDirection: 'row', 
},

strikethrough: {
  height: 2,
  width: 318,
  borderWidth: 1,
  borderColor: '#001D4A',
  position: 'absolute',
  left: 24,
  top: 8,
},

  });