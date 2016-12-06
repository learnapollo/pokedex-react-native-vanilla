import React from 'react'
import { graphql } from 'react-apollo'
import { ScrollView, View, Image, Text, Button } from 'react-native'
import gql from 'graphql-tag'

import PokemonPreview from './PokemonPreview'

class Pokedex extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Trainer: React.PropTypes.object,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<Text style={{marginTop: 64}}>Loading</Text>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<Text style={{marginTop: 64}}>An unexpexted error occured</Text>)
    }

    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <Text style={{marginTop: 64}}>
          Hey {this.props.data.Trainer.name}, there are {this.props.data.Trainer.ownedPokemons.length} Pokemons in your pokedex
        </Text>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {this.props.data.Trainer.ownedPokemons.map((pokemon) =>
              <PokemonPreview key={pokemon.id} pokemon={pokemon} />
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const TrainerQuery = gql`query TrainerQuery($name: String!) {
  Trainer(name: $name) {
    id
    name
    ownedPokemons {
      id
      name
      url
    }
  }
}`

const PokedexWithData = graphql(TrainerQuery, {
    options: {
      variables: {
        name: '__NAME__'
      }
    }
  }
)(Pokedex)

export default PokedexWithData