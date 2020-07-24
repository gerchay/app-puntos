import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({onLongPressLeft,textLeft,togglePoinstFilter}) => {
    return (
        <View style={styles.panel}>
            <View style={styles.btnLeft}>
                <Button title={textLeft} onPress={onLongPressLeft}/>
            </View>
            <Button title="Mostrar/Ocultar" onPress={togglePoinstFilter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnLeft: {
        paddingRight: 15
    },
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});