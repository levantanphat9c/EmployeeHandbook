/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Platform, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TopBar from './TopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OpenFile from 'react-native-doc-viewer';
import FileViewer from 'react-native-file-viewer';

const FolderScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const folderState = useSelector((state) => state.folderState);
  const {currentFolderId, currentFolderName, currentParentFolderId} = folderState


  useEffect(() => {
      dispatch({type: 'LOAD_FOLDER', payload: {id: 1}})
      const path = 'https://cdn.ecogiong.com:4443/bagang/banner/example.pdf'
      FileViewer.open(path)
      .then(() => {
        console.log('success')
      })
      .catch(error => {
        console.log('error')
      });
  }, []);

  const findFormatFile = (name) => {
    indexOfDot = name.lastIndexOf('.');
    formatFile = name.slice(indexOfDot + 1);
    if(formatFile === 'pdf'){
      return 'pdf';
    }else if(formatFile === 'xlsx' || formatFile === 'xlx' || formatFile === 'xlsm') {
      return 'excel';
    }else if(formatFile === 'doc' || formatFile === 'docx') {
      return 'word';
    }else if(formatFile === 'txt') {
      return 'txt';
    }else if(formatFile === 'jpeg' || formatFile === 'jpg' || formatFile === 'png' || formatFile === 'gif' || formatFile === 'tiff' || formatFile === 'raw') {
      return 'image';
    }else if(formatFile === 'pptx' || formatFile === 'ppt' || formatFile === 'pps' || formatFile === 'ppsx') {
      return 'ppt';
    }
  }

  return (
    <View style={{flex: 1}}>
      <TopBar headderTitle={currentFolderId === 1 ? "SỔ TAY NHÂN VIÊN" : currentFolderName} onPress={() => currentFolderId !== 1 ? dispatch({type: 'LOAD_FOLDER', payload: {id: currentParentFolderId}}) : navigation.goBack()}/>
      {folderState.folders && <View style={{padding: 20, flex: 1}}>
        <View>
          <FlatList
            data={folderState.folders.subFolders}
            renderItem={({ item, index}) => {
              return (
                <TouchableOpacity key={index} onPress={() => dispatch({type: 'LOAD_FOLDER', payload: {id: item.folderId}})} style={{flexDirection:'row', alignItems:'center', padding: 5}}>
                  <Ionicons name="folder-open-outline" size={20}/>
                  <Text style={{marginLeft: 10}}>{item.folderName}</Text>
                </TouchableOpacity>
              )
              
            }}
            keyExtractor={item => item.id}
          />
        </View>
        
        <FlatList
          data={folderState.folders.subFiles}
          renderItem={({ item, index}) => {
            var formatFileItem = findFormatFile(item.fileName);
            return (
              <TouchableOpacity 
                key={index} 
                onPress={() => {
                  if(formatFileItem === 'pdf' || formatFileItem === 'image'){
                    navigation.navigate('FileScreen', {url: item.pathCdn, formatFile: formatFileItem, fileName: item.fileName});
                  }else{
                    if(Platform.OS === 'ios'){
                      OpenFile.openDoc([{
                        url: item.pathCdn,
                        fileNameOptional: item.fileName
                      }], (error, url) => {
                         if (error) {
                          Alert.alert("Không hỗ trợ tệp này")
                         } else {
                           console.log(url)
                         }
                       })
                    }else{
                      //Android
                      OpenFile.openDoc([{
                        url: item.pathCdn, // Local "file://" + filepath
                        fileName: item.fileName,
                        cache:false,
                      }], (error, url) => {
                         if (error) {
  
                          Alert.alert("Không hỗ trợ tệp này")
                         } else {
                           console.log(url)
                         }
                       })
                    }
                  }               
                }} 
                style={{flexDirection:'row', alignItems:'center', padding: 5}}
              >
                <MaterialCommunityIcons 
                  name= {formatFileItem === 'pdf' ? "file-pdf" 
                        : formatFileItem === 'excel' ? "file-excel"
                        : formatFileItem === 'word' ? "file-word"
                        : formatFileItem === 'txt' ? "file-document"
                        : formatFileItem === 'image' ? "file-image"
                        : formatFileItem === 'ppt' ? "file-powerpoint"
                        : "file"
                      }
                  size={20}
                />
                  <Text style={{marginLeft: 10}}>{item.fileName}</Text>
                </TouchableOpacity>
            )
            
          }}
          keyExtractor={item => item.id}
        />
      </View>}        
    </View>
  );
};

export default FolderScreen;
