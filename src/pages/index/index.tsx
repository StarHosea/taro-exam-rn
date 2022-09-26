import { View, Text} from '@tarojs/components'
import { Camera, CameraType } from 'expo-camera';
// import {TouchableOpacity} from 'react-native';
import {useState} from "react";

import './index.less';

const Index = ()=>{
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

/*  function toggleCameraType() {
    setType((current) => (
        current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }*/

  return  <View className='index'>

        <Text>Hello world!HHHH233</Text>
        <Camera type={CameraType.back}>
        </Camera>
        {/*  <View >*/}
        {/*    /!*<TouchableOpacity onPress={toggleCameraType}>*!/*/}
        {/*      <Text onClick={toggleCameraType}>Flip Camera</Text>*/}
        {/*    /!*</TouchableOpacity>*!/*/}
        {/*  </View>*/}
        {/*</Camera>*/}

  </View>
}

export default Index
