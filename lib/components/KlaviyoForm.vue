<template>
  <div class="klaviyo-email-form">
    <h3>{{ title }}</h3>
    <form
      id="contact_us"
      :class="formClass"
      action="//manage.kmail-lists.com/subscriptions/subscribe"
      data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe"
      method="GET"
      target="_blank"
      novalidate="novalidate"
    >
      <input type="hidden" name="g" :value="list" />
      <div class="klaviyo_form_actions">
        <label for="k_id_email">Email</label>
        <input
          id="k_id_email"
          class=""
          type="email"
          value=""
          name="email"
          :placeholder="emailPlaceholder"
        />
      </div>
      <div class="klaviyo_messages">
        <div class="success_message" style="display: none;">
          <h2>{{ successMessage }}</h2>
        </div>
        <div class="error_message" style="display: none;" />
        <div class="klaviyo_form_actions">
          <button type="submit" class="klaviyo_submit_button">
            {{ submitButtonText }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    listId: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'Sign up for our newsletter'
    },
    emailPlaceholder: {
      type: String,
      default: 'Enter Your Email'
    },
    submitButtonText: {
      type: String,
      default: 'SIGN UP'
    },
    successMessage: {
      type: String,
      default: 'Thanks for signing up!'
    }
  },
  data() {
    return {}
  },
  computed: {
    formClass() {
      return `form klaviyo_styling klaviyo_gdpr_embed_${this.list}`
    },
    list() {
      if (this.listId) {
        return this.listId
      }

      return this.$nacelle.klaviyo.defaultListId
    }
  },
  mounted() {
    const KlaviyoSubscribe = window.KlaviyoSubscribe || {}

    if (KlaviyoSubscribe.attachToForms) {
      KlaviyoSubscribe.attachToForms('#contact_us', {
        hide_form_on_success: true,
        custom_success_message: true,
        extra_properties: {
          $source: '$embed',
          $method_type: 'Klaviyo Form',
          $method_id: 'embed'
        }
      })
    }
  }
}
</script>
