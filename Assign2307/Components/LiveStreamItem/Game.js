import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {stylesLive} from '../../Styles/stylesLive';

const Game = () => {
  return (
    <View style={stylesLive.gameContainer}>
      <Text style={stylesLive.titleGameContainer}>
        Trò chơi hiển thị trong live
      </Text>
      <View style={stylesLive.listGame}>
        <TouchableOpacity>
          <Image
            source={require('../../Assests/ImageLive/icon-30.png')}
            style={stylesLive.iconGame}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Assests/ImageLive/icon-31.png')}
            style={stylesLive.iconGame}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Assests/ImageLive/icon-32.png')}
            style={stylesLive.iconGame}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Game;
