import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto') // new_punto, all_puntos
  const [visibility, setVisibility] = useState(false)
  const [poinstFilter, setPoinstFilter] = useState(true)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleList = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  const togglePoinstFilter = () => setPoinstFilter(!poinstFilter)

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} poinstFilter={poinstFilter} />
      <Panel onLongPressLeft={handleList} textLeft='Lista' togglePoinstFilter={togglePoinstFilter}/>
      <Modal visibility={visibility}>
      {visibilityFilter === 'new_punto' 
        ? <View style={styles.form}>
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit} />
          </View>
        : <List puntos={puntos} closeModal={() => setVisibility(false)} />
      }
        
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
