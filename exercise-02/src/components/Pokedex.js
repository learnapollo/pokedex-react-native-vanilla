import React from 'react'
import { graphql } from 'react-apollo'
import { View, Text } from 'react-native'
import gql from 'graphql-tag'

export default class Pokedex extends React.Component {

  render () {

    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <Text style={{marginTop: 64}}>
          Hey, there are 0 Pokemons in your pokedex
        </Text>
      </View>
    )
  }
}