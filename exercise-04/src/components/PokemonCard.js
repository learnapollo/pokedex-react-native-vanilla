import React from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'

import { View, TextInput, Image } from 'react-native'

export default class PokemonCard extends React.Component {

  static propTypes = {
    pokemon: React.propTypes.object.isRequired,
  }

  render () {

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Image
          source={{ uri: this.props.pokemon.url }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
        />
        <View style={{
          width: 200
        }}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            editable={false}
            value={this.props.pokemon.name}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            editable={false}
            value={this.props.pokemon.url}
          />
        </View>
      </View>
    )
  }
}
