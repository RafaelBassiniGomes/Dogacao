import api from '~/services/api';

const UsersApi = {
  updateUser: profile => {
    const response = api.put('users', profile);
    return response;
  },
};

export default UsersApi;
