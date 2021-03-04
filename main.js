const app = Vue.createApp({
        //  ES6 Shorthand - Use product : function() for ES5 Lower Compatibility. 
        data() {
            return {
                cartItems: 0,
                description: 'A lovely pair of socks.',
                details: ['50% Cotton', '30% Wool', '20% Polyester'],
                imageUrl: "./assets/images/socks_green.jpg",
                inventory: 19,
                onSale: true,
                product: 'Socks',
                shopLinkUrl: "https://www.sockshop.co.uk/",
                sizes: ['Small', 'Medium', 'Large'],
                variants: [
                    {id: 2234, colour: 'Green', imageUrl: ".\\assets\\images\\socks_green.jpg"},
                    {id: 2235, colour: 'Blue', imageUrl: ".\\assets\\images\\socks_blue.jpg"}
                ]
            }
        },
        methods: {
            addToCart() {
                this.cartItems += 1;
            },
            removeFromCart() {
                cartItems = this.cartItems;
                
                if (cartItems > 0)
                    this.cartItems -= 1;
            },
            updateImage(newUrl) {
                this.imageUrl = newUrl;
            }
        }
    }
)