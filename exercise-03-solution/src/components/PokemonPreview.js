import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class PokemonPreview extends React.Component {

  static propTypes = {
    pokemon: React.PropTypes.object,
  }

  render () {
    const pokemonId = this.props.pokemon.id

    return (
      <View
          style={{
            flex: 1,
            margin: 12,
          }}
        >
        <TouchableHighlight
          onPress={() => Actions.pokemonPage({pokemonId})}
          underlayColor='lightgray'
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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
            <Text>{this.props.pokemon.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
