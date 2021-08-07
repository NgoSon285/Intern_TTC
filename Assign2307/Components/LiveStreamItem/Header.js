import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {stylesLive} from '../../Styles/stylesLive';

const Header = () => {
  return (
    <View style={stylesLive.header}>
      <TouchableOpacity style={stylesLive.avatar}>
        <Image
          source={require('../../Assests/ImageLive/Ellipse_3.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Điền một tiêu đề cho buổi Live..."
        placeholderTextColor="#e5e5e5"
        style={stylesLive.textHeader}
      />
    </View>
  );
};

export default Header;
