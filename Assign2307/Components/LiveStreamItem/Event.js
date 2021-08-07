import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {stylesLive} from '../../Styles/stylesLive';
const Event = () => {
  return (
    <View style={stylesLive.eventContainer}>
      <TouchableOpacity style={stylesLive.buttonEvent}>
        <Icon name="user" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={stylesLive.buttonStart}>
        <Text style={{color: '#fff', fontWeight: '500'}}>Bắt đầu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesLive.buttonEvent}>
        <Icon name="gamepad" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Event;
