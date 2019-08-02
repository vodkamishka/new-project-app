import * as axios from 'axios';

const api = 'https://test-gtp.janusww.com/ang';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjQ3MTc1NDMsImlzcyI6Imh0dHBzOlwvXC90ZXN0LWd0cC5qYW51c3d3LmNvbSIsImF1ZCI6Imh0dHBzOlwvXC90ZXN0LWd0cC5qYW51c3d3LmNvbSIsIm5iZiI6MTU2NDcxNzU0MywiZXhwIjoxNTY0ODAzOTQzLCJkYXRhIjp7InVzZXJuYW1lIjoiQ2xpZW50X3Rlc3QiLCJpZCI6MywidGltZSI6MTU2NDcxNzU0MywiZW1haWwiOiJtX3NoYWRpZXZAamFudXMucnUiLCJjZW50cmlmdWdvX3Rva2VuIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lJeklpd2laWGh3SWpveE5UWTBOekUzTlRRemZRLmNLZnRxR1A1aGg4STlCeXZsUzJoMDBZMzBDQVJvQm1fVXdfa29BMGRyU28ifSwianRpIjozfQ.84iwn0bfhQL83sVpzhyVKW4dpdohIwJddlwmfEsghBE';

export const budgetsAPI = {

     getBudgets () {
        
         return axios.get(`${api}/budgets`, { headers: {"Authorization" : `Bearer ${token}`} })
         .then(response => response.data)
    
     }

}

