import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {stylesLive} from '../../Styles/stylesLive';

const Bottom = prop => {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'gold', fontWeight: '700'}}>{prop.slot} chỗ</Text>
      </View>
      <View style={stylesLive.bottomContainer}>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text style={stylesLive.titleNav}>Phòng </Text>
          <Text style={stylesLive.titleNav}>bình thường</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text style={stylesLive.titleNav}>Phòng </Text>
          <Text style={stylesLive.titleNav}>nhiều người</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text style={stylesLive.titleNav}>Phòng </Text>
          <Text style={stylesLive.titleNav}>thu phí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesLive.buttonNav}>
          <Text style={stylesLive.titleNav}>Phòng </Text>
          <Text style={stylesLive.titleNav}>mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottom;
