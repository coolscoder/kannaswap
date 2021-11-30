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

const App = () => {
  const [overlay, setOverlay] = useState(false)
  const [password, setPassword] = useState()

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
              placeholder='Type Password'
              secureTextEntry={true}
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              rightIcon={{ type: 'font-awesome', name: 'eye-slash' }}
              onChangeText={e => setPassword(e)}
            />
            <Button title="Send" />
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
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: '#938989',
    marginBottom: 30,
  }
})

export default App;