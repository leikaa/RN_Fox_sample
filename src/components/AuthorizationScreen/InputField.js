import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {THEME} from '../../theme';
import InputFieldIcon from './InputFieldIcon';
import InputFieldDisplayInfoIcon from './InputFieldDisplayInfoIcon';

const window = Dimensions.get('window');

const InputField = ({placeholder, value, setValue, icon, displayInfoIcon = false, isMasked = false, setMasked, keyboardType = 'default'}) => {
  const [iconColor, setIconColor] = useState(THEME.DISABLED_COLOR);
  const [isDisplayInfoIconVisible, setIsDisplayInfoIconVisible] = useState(false);

  const handleClick = () => {
    setMasked(!isMasked);
  };

  return (
    <View style={styles.container}>
      {
        icon &&
        <InputFieldIcon
          icon={icon}
          color={iconColor}
        />
      }
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        onFocus={() => {
          setIconColor(THEME.MAIN_COLOR);
          setIsDisplayInfoIconVisible(true);
        }}
        onBlur={() => {
          setIconColor(THEME.DISABLED_COLOR);
          {
            if (!value) {
              setIsDisplayInfoIconVisible(false);
            }
          }
        }}
        placeholder={placeholder}
        secureTextEntry={isMasked}
        placeholderTextColor={THEME.DISABLED_COLOR}
        value={value}
        autoCorrect={false}
        keyboardType={keyboardType}
      >
      </TextInput>
      {
        displayInfoIcon && isDisplayInfoIconVisible &&
        <InputFieldDisplayInfoIcon isMasked={isMasked} onPress={handleClick}/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: window.width - 40,
  },
  input: {
    position: 'relative',
    zIndex: 10,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',
    paddingLeft: 52,
    lineHeight: 20,
    fontSize: 16,
    marginVertical: 10,
    color: '#000',
    borderWidth: 1,
    borderColor: THEME.DISABLED_COLOR,
  },
});

export default InputField;
