import axios from 'axios';
import { api } from '../contants';

export const getFolderEmployeeHandbook = (payload) => {
    console.log('GET FOLDER =>>>>>>>>>', payload);
    return axios.get(api.url + 'api/HRApp/GetFolderAsync?folderId=' + payload.id);
}

