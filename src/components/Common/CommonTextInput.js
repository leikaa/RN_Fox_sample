import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

import {THEME} from '../../theme';

const CommonTextInput = ({style, title, onChangeValue, value, keyboardType = 'default', placeholder, filter = false}) => {
  const focusOnElement = useRef(null);

  return (
    <View style={[styles.input_container, style]}>
      <Text
        style={styles.input_title}
        onPress={() => focusOnElement.current.focus()}
      >
        {title}
      </Text>
      <TextInput
        style={[styles.input, {borderBottomColor: THEME.MAIN_COLOR}]}
        keyboardType={keyboardType}
        ref={focusOnElement}
        onChangeText={text => {
          if (filter === 'name') {
            const re = /^[\p{L}\s]*$/u;
            if (re.test(String(text).toLowerCase())) {
              onChangeValue(text);
            }
          } else {
            onChangeValue(text);
          }
        }}
        value={value}
        placeholderTextColor={THEME.DISABLED_COLOR}
        placeholder={placeholder}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    marginVertical: 15,
    marginHorizontal: 20,
    position: 'relative',
  },
  input_title: {
    fontSize: 12,
    color: '#545355',
    fontWeight: '300',
    paddingLeft: 15,
    backgroundColor: '#f1f1f1',
    paddingTop: 10,
  },
  input: {
    height: 30,
    borderColor: '#f1f1f1',
    borderWidth: 2,
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    color: '#3d3c3e',
    fontWeight: '400',
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 0,
  },
});

export default CommonTextInput;
