export default class DataTableService {

    getColumnsNames = () => {
        return [
            { id: 1, name: 'Budget name' },
            { id: 2, name: 'PO number' },
            { id: 3, name: 'Amount total, $' },
            { id: 4, name: 'Amount remaining, $' },
            { id: 5, name: 'Created at' },
            { id: 6, name: 'Projects' },
        ]
    }

    getData = () => {
        return [
            { id: 1, budgetName: 'For transition operation', POnumber: '9846-12-3254', amountTotal: 1500.00, amountRemaining: 1487.00, createdAt: '10 jul 2019, 16:48', projects: [{id:345, name: 'Project 2345 - manual translation'},  {id: 346, name: 'Project 1128 - ubersetzung Projects ubermarginal'}] },
            { id: 2, budgetName: 'New budgets for all primary ', POnumber: '6548947515', amountTotal: 20680.00, amountRemaining: 21946.65, createdAt: '8 mar 2018, 14:02', projects: [{id: 347, name: 'Project 295 - manual translation'}, {id: 348, name : 'Project 1504 - ubersetzung'}] },
            { id: 3, budgetName: 'Documents and secure data ', POnumber: '9546877-3246', amountTotal: 9150.00, amountRemaining: 3546.33, createdAt: '12 apr 2019, 8:32', projects: [{id: 350, name: 'Project 1365 - manual translation'}] },
            { id: 4, budgetName: 'Exelltable with marceting', POnumber: '234566-12-3254', amountTotal: 37890.00, amountRemaining: 15000.00, createdAt: '18 dec 1982, 01:48', projects: [{id:351, name: 'Project 1111 - manual translation'},  {id: 352, name: 'Project 1790 - der himel'}] },
            { id: 5, budgetName: 'Plutarc pliniy mladshiy ', POnumber: '456677', amountTotal: 25180.00, amountRemaining: 111.60, createdAt: '18 may 2018, 02:01', projects: [{id: 353, name: 'Project 12 - manual transaction'}, {id: 354, name : 'Project 3333 - ahtung'}] },
            { id: 6, budgetName: 'Documents abount ', POnumber: '906533222', amountTotal: 13000.00, amountRemaining: 33546.33, createdAt: '12 jun 1888, 18:55', projects: [{id: 355, name: 'Project 4567 - manual consultation'}, {id: 356, name: 'Project 14567767 - manual transcription'}, {id: 357, name: 'Project 4567566 - manual conversation'}] }  
        ]
    }
}