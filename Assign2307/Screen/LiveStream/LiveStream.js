import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Bottom from '../../Components/LiveStreamItem/Bottom';
import Event from '../../Components/LiveStreamItem/Event';
import Game from '../../Components/LiveStreamItem/Game';
import Header from '../../Components/LiveStreamItem/Header';
import Slot from '../../Components/LiveStreamItem/Slot';
import {styles} from '../../Styles/styles';

const LiveStream = () => {
  const [slot, setSlot] = useState(4);
  const getDataSlot = slot => {
    setSlot(slot);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={{alignItems: 'center'}}>
          <Game />
          <Slot sendData={getDataSlot} />
          <Event />
        </View>
        <View>
          <Bottom slot={slot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LiveStream;
