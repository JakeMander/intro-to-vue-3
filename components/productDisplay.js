app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <a :href="shopLinkUrl">
                    <img :src="currentImage">
                </a>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>Description: {{ description }}</p>
                <p v-if="onSale"><b>On Sale!</b></p>
                <p>Stock: 
                <span v-if="currentQuantity > 20">In Stock</span>
                <span v-else-if="currentQuantity <= 20 && currentQuantity > 0">Low Stock!</span>
                <span v-else>Out Of Stock</span>
                </p>
                <p>Shipping: {{ shipping }}</p>
                <ul>
                <li v-for="size in sizes">{{size}}</li>
                </ul>
                <ul>
                <li v-for="detail in details">{{detail}}</li>
                </ul>
                <ul>
                <div v-for="(variant, index) in variants" 
                @mouseover="updateVariant(index)" 
                :key=variant.id
                :style="{backgroundColor: variant.colour}"
                class="color-circle">
                </div>
                </ul>
                <button class="button" 
                :class="{ disabledButton: !(currentQuantity > 0) }"
                @click="addToCart">Add To Cart</button>
                <button class="button" @click="removeFromCart">Remove From Cart</button>
            </div>
        </div>
    </div>

`,
  data() {
    return {
      brand: "Jake's Sock Warehouse",
      description: "A lovely pair of socks.",
      details: ["50% Cotton", "30% Wool", "20% Polyester"],
      selectedVariant: 0,
      onSale: true,
      product: "Socks",
      shopLinkUrl: "https://www.sockshop.co.uk/",
      sizes: ["Small", "Medium", "Large"],
      variants: [
        {
          id: 2234,
          colour: "Green",
          imageUrl: ".\\assets\\images\\socks_green.jpg",
          quantity: 70,
          itemsInCart: 0
        },
        {
          id: 2235,
          colour: "Blue",
          imageUrl: ".\\assets\\images\\socks_blue.jpg",
          quantity: 5,
          itemsInCart: 0
        },
      ],
    };
  },
  methods: {
    addToCart() {
      // console.log(this);
      let sock = this.variants[this.selectedVariant];
      if (sock.quantity > 0) {
        sock.itemsInCart += 1;
        sock.quantity -= 1;
      }
      this.$emit('add-to-cart', sock.id);
    },
    removeFromCart() {
      let sock = this.variants[this.selectedVariant];

      if (sock.itemsInCart > 0) {
        sock.itemsInCart -= 1;
        sock.quantity += 1;
        this.$emit('remove-from-cart', sock.id);
      }
    },
    updateImage(newUrl) {
      this.imageUrl = newUrl;
    },
    //  Method to update global tracked value for current active sock variant.
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
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
    },
    shipping() {
      var shippingString = this.premium ? "Free!" : "£2.50";
      return shippingString;
    }
  },
});
