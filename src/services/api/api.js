import * as axios from 'axios';

const api = 'https://test-gtp.janusww.com/ang';

const body_request = {
    "login": "Client_test",
    "password": "123456"     
}

export const authAPI = {

    getToken (token) {  
         return axios.post(`${api}/auth`, body_request)
        .then(res => token = res.data.data.access_token)
        .then(() => sessionStorage.setItem('tokenData', JSON.stringify(token)))
        .then(() => token = JSON.parse(sessionStorage.getItem('tokenData')))
    }   
}
/*
export const budgetsAPI = {



     getBudgets () {
        
         return axios.get(`${api}/budgets`, { headers: {"Authorization" : `Bearer ${token}`} })
         .then(response => response.data)
    
     }

}
*/


