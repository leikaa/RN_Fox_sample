import {Alert} from 'react-native';

const ErrorsHandler = (message) => {
  Alert.alert('Ошибка', message,
    [{text: 'ОК', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}], {cancelable: false});
};

export default ErrorsHandler;
