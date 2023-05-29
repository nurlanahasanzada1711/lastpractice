import {
    BASE_URL
} from './base_url';
import axios from 'axios';


// get all coins
export const getAllCoins = async (name) => {
    let globalData;
    let URL;
    if (!name) {
        URL = BASE_URL + '/coins';
    } else {
        URL = BASE_URL + '/coins' + `?name=${name}`;
    }
    await axios.get(URL).then((res) => {
        globalData = res.data.data;
    });
    return globalData;
};



// get coin by id 
export const getById = async (id) => {
    let globalData;
    await axios.get(`${BASE_URL}/coins/${id}`).then((res) => {
        globalData = res.data.data;
    });
    return globalData;
};


// delete coin by id
export const deleteCoinById = async (id) => {
    let deletedCoin;
    await axios.delete(`${BASE_URL}/coins/${id}`).then((res) => {
        deletedCoin = res.data.data;
    });
    return deletedCoin;
};


// post coin
export const postCoin = (payload) => {
    axios.post(`${BASE_URL}/coins/`, payload);
};

// edit coin

export const editCoin = (id, payload) => {
    axios.put(`${BASE_URL}/coins/`, payload);
}