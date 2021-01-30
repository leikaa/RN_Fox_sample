import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import ArrowBackIcon from '../components/Common/Icons/ArrowBackIcon';
import ProfileItem from '../components/ProfileScreen/ProfileItem';
import SubmitButton from '../components/Common/CommonButton';
import {clearAllData} from '../store/actions/profile';

const window = Dimensions.get('window');

const ProfileScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const email = useSelector(state => state.Profile.email);

  const onSubmitHandler = () => {
    dispatch(clearAllData());
    navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content_container}>
        <ProfileItem
          itemTitle={'Email'}
          itemValue={email}
        />
      </View>

      <View style={styles.logout_btn_container}>
        <SubmitButton
          title={'Выход'}
          onPress={onSubmitHandler}
          style={styles.logout_btn}
        />
      </View>
    </SafeAreaView>
  );
};

ProfileScreen.navigationOptions = () => ({
  headerBackTitle: null,
  title: 'Профиль',
  headerBackImage: () => (
    <ArrowBackIcon
      color={'#fff'}
      width={14}
      height={24}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content_container: {
    height: 70,
    flex: 1,
  },
  logout_btn_container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  logout_btn: {
    width: window.width - 40,
  },
});

export default ProfileScreen;
