const app = Vue.createApp(
    {
        //  ES6 Shorthand - Use product : function() for ES5 Lower Compatibility. 
        data() {
            return {
                product: 'Socks',
                description: 'A lovely pair of socks.'
            }
        }
    }
)