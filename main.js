const app = Vue.createApp(
    {
        //  ES6 Shorthand - Use product : function() for ES5 Lower Compatibility. 
        data() {
            return {
                description: 'A lovely pair of socks.',
                details: ['50% Cotton', '30% Wool', '20% Polyester'],
                imageUrl: "./assets/images/socks_green.jpg",
                inventory: 19,
                onSale: true,
                product: 'Socks',
                shopLinkUrl: "https://www.sockshop.co.uk/",
                sizes: ['Small', 'Medium', 'Large'],
                variants: [
                    {id: 2234, colour: 'Green'},
                    {id: 2235, colour: 'Blue'}
                ]
            }
        }
    }
)