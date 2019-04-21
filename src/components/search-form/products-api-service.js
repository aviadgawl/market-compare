import Jquery from 'Jquery';

let productApiServiceUrl = "";

function getProducts(search){
    
    if(search.length){
        Jquery.ajax(
            {
                url: productApiServiceUrl,
                contentType: "application/json",
                success: (data) => {

                },
                error: (error) => {

                }
            }
        );
    }
    else{

    }

}