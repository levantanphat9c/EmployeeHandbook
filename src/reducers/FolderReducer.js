const initialState = {
    folders: undefined,
    currentFolderId: undefined,
    currentFolderName: undefined,
    currentParentFolderId: undefined,
  };
  const folderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_FOLDER_SUCCESS':
        console.log('LOAD SUCCESS', action.payload);
        return {
          ...state,
          folders: action.payload,
          currentFolderId: action.payload.folderId,
          currentFolderName: action.payload.folderName,
          currentParentFolderId: action.payload.parentFolderId,
        };
    case 'LOAD_FOLDER_FAILED':
        console.log('LOAD_FOLDER_FAILED', action.payload);
        return {
          ...state,
          folders: undefined
        };
      default:
        return state;
    }
  };
  
  export default folderReducer;
  