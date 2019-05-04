import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, FlatList} from 'react-native';

const flatListData = [
    {
        "name": "Kanto",
        "uriImage": require('../assets/images/pokekantos.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    },
    {
        "name": "Johto",
        "uriImage": require('../assets/images/pokejohto.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=251"
    },
    {
        "name": "Hoenn",
        "uriImage": require('../assets/images/pokehoenn.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=251&limit=386"
    },
    {
        "name": "Sinnoh",
        "uriImage": require('../assets/images/pokesinnoh.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=386&limit=493"
    },
    {
        "name": "Teselia",
        "uriImage": require('../assets/images/poketeselia.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=493&limit=649"
    },
    {
        "name": "Kalos",
        "uriImage": require('../assets/images/pokekalos.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=649&limit=721"
    },
    {
        "name": "Alola",
        "uriImage": require('../assets/images/pokealola.png'),
        "url": "https://pokeapi.co/api/v2/pokemon?offset=721&limit=802"
    },
];
export default flatListData;