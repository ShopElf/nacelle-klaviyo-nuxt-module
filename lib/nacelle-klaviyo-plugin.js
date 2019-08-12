export default ({ store }) => {
  const viewedProduct = (product) => {
    const _learnq = window._learnq || []
    const item = {
      ProductName: product.title,
      ProductID: product.id,
      Categories: [], // The list of categories is an array of strings.
      ImageURL: product.featuredMedia.src,
      URL: `${window.location.origin}/products/${product.handle}`,
      Brand: '',
      Price: product.priceRange.max
      // CompareAtPrice: product.compareAtPrice
    }

    _learnq.push(['track', 'Viewed Product', item])
    _learnq.push(['trackViewedItem', {
      Title: item.ProductName,
      ItemId: item.ProductID,
      Categories: item.Categories,
      ImageUrl: item.ImageURL,
      Url: item.URL,
      Metadata: {
        Brand: item.Brand,
        Price: item.Price
        // CompareAtPrice: item.CompareAtPrice
      }
    }])
  }

  store.subscribe((mutation, state) => {
    const { type, payload } = mutation

    if (type !== 'events/addEvent') {
      return null
    }

    if (payload.event === 'PRODUCT_VIEW') {
      viewedProduct(payload.product)
    }
  })

  inj
}
