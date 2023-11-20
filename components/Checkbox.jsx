import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { styles } from '../style';
import { Feather } from '@expo/vector-icons';


const Checkbox = () => {

  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  }

  return (
      <View>
        <Pressable style={styles.checkbox} onPress={() => handleCheckbox()} >
            {checkbox ? <Feather name="check" size={16} color="#001D4A" /> : null}
        </Pressable>
        {checkbox ? <View style={styles.strikethrough}/> : null}
      </View>
  )
}



export default Checkbox;