const app = Vue.createApp({
        //  ES6 Shorthand - Use product : function() for ES5 Lower Compatibility. 
        data() {
            return {
                brand: "Jake's Sock Warehouse",
                cartItems: 0,
                description: 'A lovely pair of socks.',
                details: ['50% Cotton', '30% Wool', '20% Polyester'],
                selectedVariant: 0,
                onSale: true,
                product: 'Socks',
                shopLinkUrl: "https://www.sockshop.co.uk/",
                sizes: ['Small', 'Medium', 'Large'],
                variants: [
                    {id: 2234, colour: 'Green', imageUrl: ".\\assets\\images\\socks_green.jpg", quantity: "70", itemsInCart: 0},
                    {id: 2235, colour: 'Blue', imageUrl: ".\\assets\\images\\socks_blue.jpg", quantity: "0", itemsInCart: 0}
                ]
            }
        },
        methods: {
            addToCart() {
                if (this.variants[this.selectedVariant].quantity > 0) {
                    this.variants[this.selectedVariant].itemsInCart += 1;
                    this.variants[this.selectedVariant].quantity -= 1;
                }
            },
            removeFromCart() {
                cartItems = this.cartItems;
                
                if (this.variants[this.selectedVariant].itemsInCart > 0){
                    this.variants[this.selectedVariant].itemsInCart -= 1;
                    this.variants[this.selectedVariant].quantity += 1;
                }
            },
            updateImage(newUrl) {
                this.imageUrl = newUrl;
            },
            //  Method to update global tracked value for current active sock variant.
            updateVariant(index) {
                this.selectedVariant = index;
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product;
            },
            currentImage() {
                return this.variants[this.selectedVariant].imageUrl;
            },
            currentQuantity() {
                return this.variants[this.selectedVariant].quantity;
            },
            totalItemsInCart() {
                let i = 0;
                for (let variant of this.variants) {
                    i += variant.itemsInCart;
                }
                return i;
            }
        }
    }
)