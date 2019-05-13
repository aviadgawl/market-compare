export default class ProductsApiService {

    getProducts = function (productsToSearch, successCallback, errorCallback) {

        successCallback([
            [{
                Name: "Bamba",
                Brand: "Osem",
                Price: "20",
                ImgUrl: "https://www.rami-levy.co.il/files/products/big/7290000066318.jpg",
                Stores: ["Rami Levy"]
            },
            {
                Name: "Bamba Nuget",
                Brand: "Osem",
                Price: "13",
                ImgUrl: "https://www.rami-levy.co.il/files/products/big/7290000072067.jpg",
                Stores: ["Rami Levy"]
            }],
            [{
                Name: "Bamba",
                Brand: "Osem",
                Price: "10",
                ImgUrl: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800920/prod/product_images/products_large/TBR24_L_P_66318_1.png",
                Stores: ["Shufersal"]
            },
            {
                Name: "Bamba Nuget",
                Brand: "Osem",
                Price: "20",
                ImgUrl: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800920/prod/product_images/products_large/TAS50_L_P_7290100687109_1.png",
                Stores: ["Shufersal"]
            }],
            [{
                Name: "Bamba",
                Brand: "Osem",
                Price: "10",
                ImgUrl: "https://storage.googleapis.com/sp-public/items/medium/197835.jpg?v=8",
                Stores: ["Yenot Bitan"]
            }]
        ]);

    }
}
