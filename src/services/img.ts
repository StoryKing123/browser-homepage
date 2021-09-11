import Axios from 'axios';

export const queryBackgroundImgRequest = async () => {
    return await Axios.get('https://source.unsplash.com/1920x1080');
};
