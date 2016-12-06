import React from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'

import { View, TextInput, Image, Button } from 'react-native'

export const pokemonCardFragments = {
  pokemon: gql`
    fragment PokemonCardPokemon on Pokemon {
      id
      url
      name
    }
  `
}

export default class PokemonCard extends React.Component {

  static propTypes = {
    pokemon: propType(pokemonCardFragments.pokemon).isRequired,
  }

  state = {
    name: this.props.pokemon.name,
    url: this.props.pokemon.url,
  }

  render () {

    let updateButton = null
    if (this.canUpdate()) {
      updateButton = <Button
        title='Update'
        onPress={this.handleUpdate}
      />
    }

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
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder='Image Url'
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={(url) => this.setState({url})}
            value={this.state.url}
            placeholder='Image Url'
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12
          }}
        >
          <Button
            title='Delete'
            onPress={this.handleDelete}
            color='red'
          />
          {updateButton}
        </View>
      </View>
    )
  }

  canUpdate = () => {
    return this.state.name && this.state.url &&
      (this.props.pokemon.name !== this.state.name || this.props.pokemon.url !== this.state.url)
  }

  handleUpdate = () => {

  }

  handleDelete = () => {

  }
}
