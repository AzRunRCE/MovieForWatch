// Navigation/Navigation.js

import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import SearchTVShow from '../Components/SearchTvShow'

import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher un film',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Details',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  }
})

const SearchTVShowStackNavigator = createStackNavigator({
  SearchTVShow: {
    screen: SearchTVShow,
    navigationOptions: {
      title: 'Rechercher une serie TV',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Details',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Details',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    },
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Details',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  }
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/movie.png')}
            style={styles.icon}/>
        },
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'white' }
      }
    },
    SearchTVShow: {
      screen: SearchTVShowStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/th_show.png')}
            style={styles.icon}/>
        },
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'white' }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        },
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'white' },
      }
    },
    News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_fiber_new.png')}
            style={styles.icon}/>
        },
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: 'white' },
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#141414',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default MoviesTabNavigator
