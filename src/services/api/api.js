import * as axios from 'axios';

const api = 'https://test-gtp.janusww.com/ang';

const body_request = {
   "login": "Client_test",
   "password": "123456"
}

export const authAPI = {

   getToken(token = '') {
      return axios.post(`${api}/auth`, body_request)
         .then(res => token = res.data.data.access_token)
         .then(() => sessionStorage.setItem('tokenData', JSON.stringify(token)))
   }
}

export const budgetsAPI = {

   getBudgets() {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      console.log(token)
      return axios.get(`${api}/budgets?expand=projects`, { headers: { "Authorization": `Bearer ${token}` } })
   },

   createBudget(title, po_number, amount) {

      let token = JSON.parse(sessionStorage.getItem('tokenData'));

      let body_request = {

         "title": `${title}`,
         "po_number": `${po_number}`,
         "amount": `${amount}`
      }
      return axios.post(`${api}/budgets?expand=projects`, body_request, { headers: { "Authorization": `Bearer ${token}` } })
   },
   deleteBudget(id) {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      return axios.delete(`${api}/budgets/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
   },
   getSort(key) {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      return axios.get(`${api}/budgets?expand=projects&sort=${key}`, { headers: { "Authorization": `Bearer ${token}` } })
   },
   getSearch(text) {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));

      if (text.length < 1) { return axios.get(`${api}/budgets?expand=projects`, { headers: { "Authorization": `Bearer ${token}` } }) }
      else { return axios.get(`${api}/budgets?expand=projects&filter[title][like]=${text}`, { headers: { "Authorization": `Bearer ${token}` } }) }
   },
   getFilter(date, projectId, minValue, maxValue) {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      if (date === '' && projectId) { return axios.get(`${api}/budgets?expand=projects&filter[amount][lte]=${maxValue}&filter[amount][gte]=${minValue}&filter[project][eq]=${projectId}`, { headers: { "Authorization": `Bearer ${token}` } }) }
      if (projectId === undefined && date) { return axios.get(`${api}/budgets?expand=projects&filter[created_at][eq]=${date}&filter[amount][lte]=${maxValue}&filter[amount][gte]=${minValue}`, { headers: { "Authorization": `Bearer ${token}` } }) }
      if (date === '' && projectId === undefined) { return axios.get(`${api}/budgets?expand=projects&filter[amount][lte]=${maxValue}&filter[amount][gte]=${minValue}`, { headers: { "Authorization": `Bearer ${token}` } }) }

      return axios.get(`${api}/budgets?expand=projects&filter[created_at][eq]=${date}&filter[project][eq]=${projectId}&filter[amount][lte]=${maxValue}&filter[amount][gte]=${minValue}`, { headers: { "Authorization": `Bearer ${token}` } })
   },
   getBudgetId(id) {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      return axios.get(`${api}/budgets/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
   },
   editBudget(title, po_number, amount, id) {

      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      let body_request = {

         "title": `${title}`,
         "po_number": `${po_number}`,
         "amount": `${amount}`
      }
      return axios.put(`${api}/budgets/${id}`, body_request, { headers: { "Authorization": `Bearer ${token}` } })
   },
   getAmount() {
      let token = JSON.parse(sessionStorage.getItem('tokenData'));
      return axios.get(`${api}/budgets/amount`, { headers: { "Authorization": `Bearer ${token}` } })
   }
}


