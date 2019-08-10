import * as axios from 'axios';

const api = 'https://test-gtp.janusww.com/ang';

const body_request = {
    "login": "Client_test",
    "password": "123456"     
}

export const authAPI = {

    getToken (token = '') {  
         return axios.post(`${api}/auth`, body_request)
        .then(res => token = res.data.data.access_token)
        .then(() => sessionStorage.setItem('tokenData', JSON.stringify(token)))
    }   
}

export const budgetsAPI = {

     getBudgets () {
         let token =  JSON.parse(sessionStorage.getItem('tokenData'));
         console.log(token)
         return axios.get(`${api}/budgets?expand=projects`, { headers: {"Authorization" : `Bearer ${token}`} })
     },
    
     createBudget (title, po_number, amount) {

        let token =  JSON.parse(sessionStorage.getItem('tokenData'));
         
         let body_request = { 
             
            "title": `${title}` ,
             "po_number": `${po_number}`,
             "amount": `${amount}`
            } 
          return axios.post(`${api}/budgets?expand=projects`, body_request, { headers: {"Authorization" : `Bearer ${token}`} })
     },
     deleteBudget (id) {
        let token =  JSON.parse(sessionStorage.getItem('tokenData'));
        return axios.delete(`${api}/budgets/${id}`, { headers: {"Authorization" : `Bearer ${token}`} } )
     },
     getSort (key) {
        let token =  JSON.parse(sessionStorage.getItem('tokenData'));
        return axios.get(`${api}/budgets?expand=projects&sort=${key}`, { headers: {"Authorization" : `Bearer ${token}`} })
     },
     getSearch (text) {
        let token =  JSON.parse(sessionStorage.getItem('tokenData'));
        console.log(token)
        if (text.length < 1) { return axios.get(`${api}/budgets?expand=projects`, { headers: {"Authorization" : `Bearer ${token}`} })}
        else {return axios.get(`${api}/budgets?expand=projects&filter[title][like]=${text}`, { headers: {"Authorization" : `Bearer ${token}`} })}
     },
     getFilter (date, project, amount) {
        let token =  JSON.parse(sessionStorage.getItem('tokenData'));
        return axios.get(`${api}/budgets?expand=projects&filter[amount][gte]=30000`, { headers: {"Authorization" : `Bearer ${token}`} })
     }
}


/*https://test-gtp.janusww.com/ang/budgets?expand=projects&filter[amount][ite]=30000*/