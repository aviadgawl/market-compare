import Jquery from 'jquery';

export default class ProductsApiService {
    productApiServiceUrl = "https://marketcomapreapi.azurewebsites.net/api/GetProducts?code=kPOEGGsokLoaff40eD82uYA2eRgZRGNWYU2DH75zvMcyoVCAga4aFQ==";

    getProducts = function(search) {

        if (search.length) {
            Jquery.ajax(
                {
                    url: this.productApiServiceUrl,
                    contentType: "application/json",
                    method: "POST",
                    dataType: "jsonp",
                    data: {},
                    success: (data) => {
                        debugger
                    },
                    error: (error) => {
                        debugger
                    }
                }
            );
        }
        else {

        }

    }
}
