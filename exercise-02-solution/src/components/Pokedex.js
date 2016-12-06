import React from 'react'
import { graphql } from 'react-apollo'
import { View, Text } from 'react-native'
import gql from 'graphql-tag'

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
          Hey {this.props.data.Trainer.name}, there are 0 Pokemons in your pokedex
        </Text>
      </View>
    )
  }
}

const TrainerQuery = gql`query TrainerQuery {
  Trainer(name: "__NAME__") {
     name
   }
 }`

const PokedexWithData = graphql(TrainerQuery)(Pokedex)

export default PokedexWithData