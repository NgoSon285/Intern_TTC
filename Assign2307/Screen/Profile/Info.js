import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../Styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Info = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView style={{paddingHorizontal: 20}}>
        {/* //header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Tôi</Text>
          <View style={styles.formSearch}>
            <TextInput
              placeholder="Tìm tên/ID/Tên phòng live"
              style={styles.search}
            />
            <TouchableOpacity>
              <Icon
                name="search"
                size={20}
                color="#bbb"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../Assests/ic_profile_off.png')}
            style={{width: 24, height: 24}}
          />
        </View>
        {/* content */}
        <View>
          <View style={styles.profile}>
            <ImageBackground
              source={require('../../Assests/bg_profile.png')}
              style={styles.backgroundImage}
              imageStyle={{borderRadius: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'column', alignItems: 'flex-end'}}>
                <Image
                  source={require('../../Assests/ic_edit.png')}
                  style={styles.buttonEdit}
                />
              </TouchableOpacity>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../../Assests/ic_default_avatar.png')}
                  style={styles.imageAvatar}
                />
                <Text style={styles.textUserName}>Khách</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={{color: '#fff'}}>Đăng Nhập</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonRegister}>
                    <Text>Đăng Ký</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
          {/* indicators */}
          <View style={styles.indicators}>
            <View style={styles.indicatorsItem}>
              <Text style={{fontWeight: '500'}}>0</Text>
              <Text style={{fontWeight: '500'}}>Bạn bè</Text>
            </View>
            <View style={styles.indicatorsItem}>
              <Text style={{fontWeight: '500'}}>0</Text>
              <Text style={{fontWeight: '500'}}>Theo dõi</Text>
            </View>
            <View style={styles.indicatorsItem}>
              <Text style={{fontWeight: '500'}}>0</Text>
              <Text style={{fontWeight: '500'}}>Fan</Text>
            </View>
          </View>
          {/*  money */}
          <View>
            <ImageBackground
              source={require('../../Assests/bg_account_balance.png')}
              style={styles.backgroundImageBalance}
              resizeMode="stretch"
              imageStyle={{borderRadius: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.balance}>
                  <Text style={styles.balanceText}>Ví Tiền / Số dư</Text>
                </View>
                <View style={styles.balance}>
                  <View style={styles.balanceTitle}>
                    <Image
                      source={require('../../Assests/ic_gold.png')}
                      style={{width: 30, height: 30}}
                    />
                    <Text style={styles.balanceText}>Vàng</Text>
                  </View>
                  <TextInput
                    value="0"
                    editable={false}
                    style={styles.formInputBalance}
                  />
                </View>
                <View style={styles.balance}>
                  <View style={styles.balanceTitle}>
                    <Image
                      source={require('../../Assests/ic_ruby.png')}
                      style={{width: 30, height: 30}}
                    />
                    <Text style={styles.balanceText}>Ruby</Text>
                  </View>
                  <TextInput
                    value="0"
                    editable={false}
                    style={styles.formInputBalance}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          {/* method  */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity>
              <Image
                source={require('../../Assests/ic_recharge.png')}
                style={styles.imageMethod}
              />
              <Text>Nạp tiền</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../Assests/ic_without.png')}
                style={styles.imageMethod}
              />
              <Text>Rút tiền</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../Assests/ic_shopping.png')}
                style={styles.imageMethod}
              />
              <Text>Mua sắm</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../Assests/ic_VIP_level.png')}
                style={styles.imageMethod}
              />
              <Text> Cấp VIP</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.navInfo}>
                <View style={styles.navInfoItem}>
                  <Image
                    source={require('../../Assests/ic_luggage.png')}
                    style={styles.imageNav}
                  />
                  <Text style={styles.navInfoText}>Hành lý</Text>
                </View>
                <Icon name="chevron-right" size={20} color="#eee" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navInfo}>
                <View style={styles.navInfoItem}>
                  <Image
                    source={require('../../Assests/ic_level.png')}
                    style={styles.imageNav}
                  />
                  <Text style={styles.navInfoText}>Level</Text>
                </View>
                <Icon name="chevron-right" size={20} color="#eee" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navInfo}>
                <View style={styles.navInfoItem}>
                  <Image
                    source={require('../../Assests/ic_ranking.png')}
                    style={styles.imageNav}
                  />
                  <Text style={styles.navInfoText}>Hạng</Text>
                </View>
                <Icon name="chevron-right" size={20} color="#eee" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;
