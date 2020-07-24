import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Dimensions} from 'react-native';

export default ({puntos,closeModal}) => {
    return (
        <>
            <View style={styles.lista}>
                <FlatList 
                    data={puntos.map(x => x.name)} 
                    renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title='Cerrar' onPress={closeModal} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lista: {
      height: Dimensions.get('window').height-400
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15
    }
});
