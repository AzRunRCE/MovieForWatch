// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmItem extends React.Component {

  _displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      // Si la props isFilmFavorite vaut true, on affiche le 🖤
      return (
        <Image
          style={styles.favorite_image}
          source={require('../Images/ic_favorite.png')}
        />
      )
    }
  }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <FadeIn>
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForFilm(film.id, film.title !== undefined ? true : false)}>
          <Image
            style={styles.image}
            source={film.poster_path == null ? require('../Images/tv_show_generic_logo.png') : {uri: getImageFromApi(film.poster_path)}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              {this._displayFavoriteImage()}
              <Text style={styles.title_text}>{film.title == undefined ? film.original_name : film.title}</Text>
              <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Sorti le 13/12/2017</Text>
            </View>
          </View>
        </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    backgroundColor: '#141414'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  content_container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#141414'
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#141414'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    color:'white',
    flexWrap: 'wrap',
    paddingRight: 5,
    backgroundColor: '#141414'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
    backgroundColor: '#141414'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: 'white'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
    color:'white',
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default FilmItem
