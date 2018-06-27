import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class RefarScreen extends React.Component {
  static navigationOptions = {
    title: 'Radar',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
         <Text style={{color: 'red'}}>
          Here is my text
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000000',
  },
});
