const app = Vue.createApp({
        //  ES6 Shorthand - Use product : function() for ES5 Lower Compatibility. 
    data() {
        return {
            cart: [],
            premium: false
        }
    },

    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            for(let [index, val] of this.cart.entries()) {
                if (val == id) {
                    this.cart.splice(index, 1);
                    console.log(`Array Spliced: ${this.cart}`);
                    return;
                }
            }
        }
    }
})