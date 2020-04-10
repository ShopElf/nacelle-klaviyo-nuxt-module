# Nacelle Klaviyo Nuxt Module

[![npm version](https://img.shields.io/npm/v/@nacelle/nacelle-klaviyo-nuxt-module.svg)](https://www.npmjs.com/package/@nacelle/nacelle-klaviyo-nuxt-module)
[![install size](https://badgen.net/bundlephobia/minzip/@nacelle/nacelle-klaviyo-nuxt-module)](https://badgen.net/bundlephobia/minzip/@nacelle/nacelle-klaviyo-nuxt-module)

Adds Vue.js components for displaying [Klaviyo](https://www.klaviyo.com/) forms in your [Nacelle](https://getnacelle.com/) Nuxt project.

## Requirements

- A Nacelle project set up locally. See https://docs.getnacelle.com for getting started.
- A Klaviyo account and app installed on your Shopify store.

## Setup

### Add Module to Nacelle

Once you have Nacelle and Klaviyo set up you can install this module in your project from `npm`:

```
npm install @nacelle/nacelle-klaviyo-nuxt-module --save
```

After the package has installed, open `nuxt.config.js`. Under `modules` add `@nacelle/nacelle-klaviyo-nuxt-module` to the array. It should look something like this:

```
modules: [
  '@nuxtjs/pwa',
  '@nuxtjs/dotenv',
  '@nacelle/nacelle-nuxt-module',
  '@nuxtjs/sitemap',
  '@nacelle/nacelle-klaviyo-nuxt-module'
],
```

Next you will have to add the Klaviyo configuration options to `nuxt.config.js` in the `nacelle` config object. You will need a company id, default list id, and default embed code.

In your Klaviyo account dashboard find your company ID under "Account > Settings > API Keys" and copy the "public API / Site ID". The default list ID is for setting the list you would like the Klaviyo Form component to send submissions to. Select the list and find its list ID under "Settings". Finally default embed code is the code snippet provided by Klaviyo for the sign up form you would like the Klaviyo Embed Form component to display. That can be found in the Sign Up form editor under the "Behaviors" tab. When you have these values ready paste them in `nuxt.config.js` so the `nacelle` object should look something like this:

```
nacelle: {
  spaceID: process.env.NACELLE_SPACE_ID,
  token: process.env.NACELLE_GRAPHQL_TOKEN,
  gaID: process.env.NACELLE_GA_ID,
  fbID: process.env.NACELLE_FB_ID,
  klaviyo: {
    companyId: 'XXXX',
    defaultListId: 'XXXXX',
    defaultEmbedCode: '<div class="klaviyo-form-XXXXX"></div>'
  }
},
```

### Add the Components your Nacelle Storefront

There are two components you can add to your Nacelle storefront: `<klaviyo-form />` and `<klaviyo-embed-form />`.

**Klaviyo Embed Form** will display the sign up form you specified in the `defaultEmbedCode` option. You can also optionally pass a `embed-code` prop to specify a different sign up form.

**Klaviyo Form** will render a [Legacy Embedded Signup Form](https://help.klaviyo.com/hc/en-us/articles/115005249588-Add-and-Customize-a-Legacy-Embedded-Signup-Form) with a field for email address. It has props for `list-id`, `title`, `email-placeholder`, `submit-button-text`, and `success-message`.

### GDPR Settings

Klaviyo offers a form builder to help you configure branded forms with GDPR-compliant consent collection and display of terms & conditions. For more information, please refer to [this blog post](https://www.klaviyo.com/blog/gdpr-made-easy) and [Klaviyo's GDPR compliance docs](https://help.klaviyo.com/hc/en-us/articles/360003536031-Collect-GDPR-Compliant-Consent).
