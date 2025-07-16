import axios from 'axios';

export const getBeams = async () => {
  return axios.get(`/api/concrete/beams`);
}
