<template>
  <div>
    Nacelle Klaviyo Nuxt Module
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      product: {
        'variants': [
          {
            'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMTY5NjQ2MTI4MzM2NA==',
            'title': 'Default Title',
            'price': '2499.0',
            '__typename': 'Variant'
          }
        ],
        'media': [
          {
            'thumbnailSrc': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/19.png?v=1563162285&width=250',
            'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTE1NjI1NjA3MTY4MzY=',
            'src': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/19.png?v=1563162285&width=750',
            'type': 'image',
            '__typename': 'Media'
          },
          {
            'thumbnailSrc': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/20.png?v=1563162287&width=250',
            'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTE1NjI1NjA4NDc5MDg=',
            'src': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/20.png?v=1563162287&width=750',
            'type': 'image',
            '__typename': 'Media'
          },
          {
            'thumbnailSrc': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/21.png?v=1563162288&width=250',
            'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTE1NjI1NjEwNzcyODQ=',
            'src': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/21.png?v=1563162288&width=750',
            'type': 'image',
            '__typename': 'Media'
          }
        ],
        'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE0NTc1MzUzMjAxMDA=',
        'title': 'Mission Critical Bed',
        'handle': 'mission-critical-art-print',
        'description': "Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven. There's no evidence of an advanced communication network. Total guidance system failure, with less than 24 hours' reserve power. Shield effectiveness has been reduced 12 percent. We have covered the area in a spherical pattern which a ship without warp drive could cross in the given time.",
        'priceRange': {
          'min': '2499.0',
          'max': '2499.0',
          '__typename': 'PriceRange'
        },
        'options': [
          {
            'name': 'Title',
            'values': [
              'Default Title'
            ],
            '__typename': 'ProductOption'
          }
        ],
        'featuredMedia': {
          'src': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/19.png?v=1563162285&width=750',
          'thumbnailSrc': 'https://cdn.shopify.com/s/files/1/0094/4098/5124/products/19.png?v=1563162285&width=250',
          'id': 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTE1NjI1NjA3MTY4MzY=',
          'type': 'image',
          '__typename': 'Media'
        }
      }
    }
  },
  mounted () {
    this.productView(this.product)
  },
  methods: {
    ...mapActions('events', ['productView'])
  }
}
</script>

<style lang="scss" scoped></style>
