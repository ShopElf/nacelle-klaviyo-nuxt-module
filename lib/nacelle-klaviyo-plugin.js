import Vue from 'vue'
import KlaviyoForm from './nacelle/integrations/KlaviyoForm.vue'
import KlaviyoEmbedForm from './nacelle/integrations/KlaviyoEmbedForm.vue'
Vue.component('klaviyo-form', KlaviyoForm)
Vue.component('klaviyo-embed-form', KlaviyoEmbedForm)

const viewedProduct = (product) => {
  if (typeof window !== 'undefined') {
    const _learnq = window._learnq || []
    const item = {
      Name: product.title,
      ProductID: product.pimSyncSourceProductId,
      Categories: product.tags,
      ImageURL: product.featuredMedia.src,
      URL: `${window.location.origin}/products/${product.handle}`,
      Brand: product.vendor,
      Price: product.priceRange.max,
      CompareAtPrice: product.variants
        .map(variant => variant.compareAtPrice)
        .sort()
        .pop()
    }

    _learnq.push(['track', 'Viewed Product', item])
    _learnq.push(['trackViewedItem', {
      Title: item.Name,
      ItemId: item.ProductID,
      Categories: item.Categories,
      ImageUrl: item.ImageURL,
      Url: item.URL,
      Metadata: {
        Brand: item.Brand,
        Price: item.Price,
        CompareAtPrice: item.CompareAtPrice
      }
    }])
  }
}

const addedToCart = (product) => {
  if (typeof window !== 'undefined') {
    const _learnq = window._learnq || []
    const item = {
      Name: product.title,
      ProductID: product.variant.id,
      Categories: product.tags,
      ImageURL: product.variant.featuredMedia.src,
      URL: `${window.location.origin}/products/${product.handle}`,
      Brand: product.vendor,
      Price: product.variant.price,
      CompareAtPrice: product.variant.compareAtPrice
    }

    _learnq.push(['track', 'Added to Cart', item])
  }
}

const setCustomer = (customer) => {
  if (typeof window !== 'undefined') {
    const _learnq = window._learnq || []
    if (customer.email) {
      _learnq.push(['identify', {
        '$email': customer.email
      }])
    }
  }
}

export default ({ store }) => {
  store.subscribe((mutation, state) => {
    const { type, payload } = mutation

    if (type === 'product/setProduct') {
      viewedProduct(payload)
    }

    if (type === 'cart/addLineItemMutation') {
      addedToCart(payload)
    }

    if (type === 'account/setCustomer') {
      setCustomer(payload)
    }
  })
}
