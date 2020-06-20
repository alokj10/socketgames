import axios from 'axios';
// import AuthHelper from './AuthHelper';

const getData = (url) => {
    // let accessToken = AuthHelper.getToken();
    // let options = {
    //     headers: {
    //       "x-access-token": accessToken
    //     }
    // };
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            console.log('res', res);
            if(res.status === 401) {
                console.log('in resolve not authorized error received');
                reject(res);
            }
            else
            {
                resolve(res);
            }
        })
        .catch((err) => {
            console.log('err', err);
            reject(err);
        })
    });
    
}

const saveData = (url, model) => {
    // let accessToken = AuthHelper.getToken();
    // let options = {
    //     headers: {
    //       "x-access-token": accessToken
    //     }
    // };
    // return axios.post(url, model, options);
    return axios.post(url, model);
}

const updateData = (url, model) => {
    // let accessToken = AuthHelper.getToken();
    // let options = {
    //     headers: {
    //       "x-access-token": accessToken
    //     }
    // };
    // return axios.put(url, model, options);
}

const deleteData = (url, model) => {
    // let accessToken = AuthHelper.getToken();
    // let options = {
    //     headers: {
    //       "x-access-token": accessToken
    //     },
    //     data: model
    // };
    // console.log('delete options', options);
    // return axios.delete(url, options);
}

export default {
    getData,
    saveData,
    updateData,
    deleteData
};