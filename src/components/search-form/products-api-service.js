import Jquery from '../../../node_modules/jquery/dist/jquery';
import ProductsApiServiceCredentials from './products-api-service-credentials';

export default class ProductsApiService {
    getProducts = function (productsToSearch , successCallback , errorCallback) {
        
        let apiServiceCredentials = new ProductsApiServiceCredentials();
        
        if (productsToSearch.length) {
            Jquery.ajax(
                {
                    type:"POST",
                    url: apiServiceCredentials.url,
                    contentType: "application/json; charset=utf-8",
                    crossDomain: true,
                    headers: {'Access-Control-Allow-Origin': '*'},
                    data: JSON.stringify(productsToSearch),
                    success: successCallback,
                    error: errorCallback
                }
            );
        }
        else {

        }

    }
}
