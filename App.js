import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Button, Input, Overlay } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [overlay, setOverlay] = useState(false)
  const [password, setPassword] = useState()
  const [secure, setSecure] = useState(true)

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Button title="Press ME" onPress={() => setOverlay(true)} />
        <Overlay overlayStyle={styles.overlay} isVisible={overlay} onBackdropPress={() => setOverlay(false)}>
          <View>
            <Text style={styles.title}>Confirmation</Text>
            <Text style={styles.description}>Input your password for security reason so we can transfer the money</Text>
            <Input
              label="password"
              labelStyle={styles.inputLabel}
              placeholder='Type Password'
              secureTextEntry={secure}
              leftIcon={
                <Icon
                  name='lock'
                  style={styles.icon}
                  size={24}
                  color='black'
                />
              }            
              rightIcon={
                <Icon
                  name={secure ? 'eye-slash' : 'eye'}
                  style={styles.icon}
                  size={24}
                  color='black'
                  onPress={() => setSecure(!secure)}
                />
              }  
              onChangeText={e => setPassword(e)}
            />
            <Button style={styles.sendBtn} title="Send" />
          </View>
        </Overlay>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    alignContent: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  overlay: {
    width: '100%',
    minHeight: '50%',
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 'auto',
    marginBottom: 0,
    padding: 20,
  },
  inputLabel: {
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'normal',
    color: '#C5C5C5'
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 20,
  },
  description: {
    fontSize: 15,
    color: '#938989',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  sendBtn: {
    backgroundColor: '#fff',
  }
})

export default App;