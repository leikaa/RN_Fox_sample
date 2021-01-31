import {check, request, RESULTS} from 'react-native-permissions';

const handleIosPermission = async (permission) => {
  let requestAccessGranted = false;
  const locationAlwaysPermission = await check(permission);
  if (locationAlwaysPermission === RESULTS.GRANTED) {
    requestAccessGranted = true;
  } else if (locationAlwaysPermission === RESULTS.DENIED) {
    const locationAlwaysPermissionAdditional = await request(permission);
    locationAlwaysPermissionAdditional === RESULTS.GRANTED
      ? requestAccessGranted = true
      : requestAccessGranted = false
  }

  return requestAccessGranted;
}

export default handleIosPermission;
