import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {stylesLive} from '../../Styles/stylesLive';

const Slot = props => {
  const [slot, setSlot] = useState(4);
  useEffect(() => {
    sendData();
  }, [slot]);
  const sendData = () => {
    props.sendData(slot);
  };
  return (
    <View style={stylesLive.slotContainer}>
      <View style={stylesLive.listSlot}>
        <TouchableOpacity
          onPress={() => setSlot(4)}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../Assests/ImageLive/icon-4.png')}
            style={stylesLive.iconSlot}
          />
          <Text style={stylesLive.titleGameContainer}>4 chỗ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSlot(6)}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../Assests/ImageLive/icon-6.png')}
            style={stylesLive.iconSlot}
          />
          <Text style={stylesLive.titleGameContainer}>6 chỗ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSlot(9)}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../Assests/ImageLive/icon-9.png')}
            style={stylesLive.iconSlot}
          />
          <Text style={stylesLive.titleGameContainer}>9 chỗ</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={{color: '#fff', margin: 20}}>Thêm mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Slot;
