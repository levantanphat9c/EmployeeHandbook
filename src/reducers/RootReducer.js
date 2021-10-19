import {combineReducers} from 'redux';
import folderReducer from './FolderReducer';

const RootReducer = combineReducers({
  folderState: folderReducer,
});

export default RootReducer;
