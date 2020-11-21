import axios from 'axios';

export const baseApi = 'https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/9667fc19a0f89193e894da7aaadf6a4b7758b45e/twubric.json';

//fetch the user's data
export const getUserDetail = async () => {
    const result = await axios.get(baseApi).then((response) => {
        return response.data;
    })
    return result;
}