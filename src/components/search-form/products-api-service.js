import Jquery from '../../../node_modules/jquery/dist/jquery';

export default class ProductsApiService {
    productApiServiceUrl = "https://marketcomapreapi.azurewebsites.net/api/GetProducts?code=kPOEGGsokLoaff40eD82uYA2eRgZRGNWYU2DH75zvMcyoVCAga4aFQ==";

    getProducts = function (productsToSearch , successCallback , errorCallback) {

        if (productsToSearch.length) {
            Jquery.ajax(
                {
                    type:"POST",
                    url: this.productApiServiceUrl,
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
