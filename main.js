const app = Vue.createApp(
    {
        //  ES6 Shorthand - Use product : function() for ES5 Lower Compatibility. 
        data() {
            return {
                product: 'Socks',
                description: 'A lovely pair of socks.',
                imageUrl: "./assets/images/socks_green.jpg",
                shopLinkUrl: "https://www.sockshop.co.uk/",
                onSale: true,
                inventory: 0
            }
        }
    }
)