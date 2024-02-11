// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButtonExample = () => {
  const [checked, setChecked] = useState('first');

  return (
      <View>
        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
          <View>
            <RadioButton.Item label="First" value="first" />
            <RadioButton.Item label="Second" value="second" />
            {/* Add more radio buttons as needed */}
          </View>
        </RadioButton.Group>
      </View>
  );
};

export default RadioButtonExample;
