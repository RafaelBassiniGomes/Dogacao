import api from '~/services/api';

const FilesApi = {
  listaFiles: () => {
    return api.get('files');
  },

  createFile: File => {
    return api.post('files', File);
  },
};

export default FilesApi;
