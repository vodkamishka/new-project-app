import React from 'react';
import { ApiDataServiceConsumer } from '../api-data-context/api-data-context';

const withApiDataService = () => Component => {

    return props => {
        return (
            <ApiDataServiceConsumer>
               {
                 apiDataService => {
                     return (
                         <Component {...props} apiDataService={apiDataService} />
                     )
                 }  
               }

            </ApiDataServiceConsumer>
        )
    }
}

export default withApiDataService;