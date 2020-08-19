import api from '~/services/api';

const ProfileApi = {
  getProfileId: Id => {
    return api.get(`users/${Id}`);
  },
};

export default ProfileApi;
