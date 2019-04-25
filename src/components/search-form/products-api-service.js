import Jquery from '../../../node_modules/jquery/dist/jquery';

export default class ProductsApiService {
    productApiServiceUrl =  "https://marketcomapreapi.azurewebsites.net/api/GetProducts?code=kPOEGGsokLoaff40eD82uYA2eRgZRGNWYU2DH75zvMcyoVCAga4aFQ==";

    getProducts = function (search) {

        if (search.length) {
            Jquery.ajax(
                {
                    type:"POST",
                    url: this.productApiServiceUrl,
                    contentType: "application/json; charset=utf-8",
                    crossDomain: true,
                    headers: {'Access-Control-Allow-Origin': '*'},
                    data: JSON.stringify([{
                        Name: "מלפפון",
                        Brand: "קטיף",
                        Price: 0,
                        Stores: ["Shufersal"]
                    }
                    ]),
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
