/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { file } from '@babel/types';
import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import PDFView from 'react-native-view-pdf';
import TopBar from './TopBar';

const FileScreen = ({navigation, route}) => {

  const url = route.params.url;
  const formatFile = route.params.formatFile;
  const fileName = route.params.fileName;

  const {width, height} = Dimensions.get('screen');

  const resourceType = 'url';
  const resources = {
    file: require('../assets/example.pdf'),
    url: url,
    base64: 'JVBERi0xLjMKJcfs...',
  };

  return (
    <View style={{flex: 1}}>
      <TopBar headderTitle={fileName} onPress={() => navigation.goBack()}/>
      
      <View style={{flex: 1, justifyContent:'center'}}>
        {formatFile === 'pdf' && <PDFView
          style={{flex: 1 }}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />}
        {formatFile === 'image' && <Image
          source={{uri: url}}
          style={{ width: width * 0.9, height: height ,alignSelf:'center'}}
          resizeMethod={'auto'}
          resizeMode={'contain'}
        />}
      </View>
        
    </View>
  );
};

export default FileScreen;
