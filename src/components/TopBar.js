/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TopBar = ({onPress, headderTitle = undefined}) => {
  return (
      <View style={{flexDirection:'row', justifyContent:'center', padding: 15}}>
        <TouchableOpacity onPress={() => onPress()} style={{flex: 1}}>
        {headderTitle !== "SỔ TAY NHÂN VIÊN" && <Text>Back</Text>}
        </TouchableOpacity>
        <TouchableOpacity  style={{flex: 2, alignItems:'center'}}>
          <Text style={{color:'#24417D', fontWeight:'bold'}}>{headderTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}>
          
        </TouchableOpacity>
      </View>           
  );
};

export default TopBar;
