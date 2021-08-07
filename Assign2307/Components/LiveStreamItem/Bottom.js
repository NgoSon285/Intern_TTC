import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {stylesLive} from '../../Styles/stylesLive';

const Bottom = prop => {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'gold',fontWeight:'600'}}>{prop.slot} chỗ</Text>
      </View>
      <View style={stylesLive.bottomContainer}>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text>Phòng </Text>
          <Text>bình thường</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text>Phòng </Text>
          <Text>nhiều người</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text>Phòng </Text>
          <Text>thu phí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text>Phòng </Text>
          <Text>mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;
