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
            
            { id: 1, title: 'For transition operation', po_number: '9846-12-3254', amount: 1500.00, amount_remaining: 1487.00, created_at: '10 jul 2019, 16:48', projects: [{id:345, title: 'Project 2345 - manual translation'},  {id: 346, title: 'Project 1128 - ubersetzung Projects ubermarginal'}] },
            { id: 2, title: 'New budgets for all primary ', po_number: '6548947515', amount: 20680.00, amount_remaining: 21946.65, created_at: '8 mar 2018, 14:02', projects: [{id: 347, title: 'Project 295 - manual translation'}, {id: 348, title : 'Project 1504 - ubersetzung'}] },
            { id: 3, title: 'Documents and secure data ', po_number: '9546877-3246', amount: 9150.00, amount_remaining: 3546.33, created_at: '12 apr 2019, 8:32', projects: [{id: 350, title: 'Project 1365 - manual translation'}] },
            { id: 4, title: 'Exelltable with marceting', po_number: '234566-12-3254', amount: 37890.00, amount_remaining: 15000.00, created_at: '18 dec 1982, 01:48', projects: [{id:351, title: 'Project 1111 - manual translation'},  {id: 352, title: 'Project 1790 - der himel'}] },
            { id: 5, title: 'Plutarc pliniy mladshiy ', po_number: '456677', amount: 25180.00, amount_remaining: 111.60, created_at: '18 may 2018, 02:01', projects: [{id: 353, title: 'Project 12 - manual transaction'}, {id: 354, title : 'Project 3333 - ahtung'}] },
            { id: 6, title: 'Documents abount ', po_number: '906533222', amount: 13000.00, amount_remaining: 33546.33, created_at: '12 jun 1888, 18:55', projects: [{id: 355, title: 'Project 4567 - manual consultation'}, {id: 356, title: 'Project 14567767 - manual transcription'}, {id: 357, title: 'Project 4567566 - manual conversation'}] }
            
        ]
    }
}