import {Alert} from 'react-native';

const ErrorsHandler = (message, title = 'Ошибка') => {
  Alert.alert(title, message,
    [{text: 'ОК', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}], {cancelable: false});
};

export default ErrorsHandler;
