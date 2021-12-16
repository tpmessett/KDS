<template>
  <div class="card" v-bind:class="[isActive ? 'card' : 'hide']">
    <vue-swappable-card event="click">>
      <template #content-primary>
          <div class="header">
            <div><h5>ORDER ID: {{ transaction_id }}</h5></div>
            <div v-show="fulfillment_date" class="time"><h5>TIME: {{ fulfillment_date.substring(fulfillment_date.length - 8) }}</h5></div>
            <div v-if="fulfillment_date === null" class="time"><h5>ASAP</h5></div>
          </div>
          <div v-if="dateTime >= fulfillment_date" class="overdue">
            <p><strong>ORDER OVERDUE</strong></p>
          </div>
          <div class="items">
              <ul v-if="order_contents">
                <li v-for="item in order_contents" :key="item.product_variant.id">{{item.quantity}} x {{item.product_variant.name}}
                  <ul v-if="item.applied_modifiers">
                    <li v-for="mod in item.applied_modifiers" :key="mod.modifier_id">{{mod.quantity}} x {{mod.modifier.name}}</li>
                  </ul>
                </li>
              </ul>
              <h5 class='notes' v-show='order_notes'>ORDER NOTES:</h5>
              <p>{{order_notes}}</p>
          </div>
          <div class="footer">
            <div class="btn-flat" @click="isActive = !isActive">MARK AS READY</div>
          </div>
      </template>
      <template #content-secondary>
          <div class="header">
            <div><h5>ORDER ID: {{ transaction_id }}</h5></div>
            <div class="time"><h5>{{ delivery_date }}</h5></div>
          </div>
          <div class="items person-details">
              <p><strong>FIRST NAME: </strong>{{first_name}}</p>
              <p><strong>LAST NAME: </strong>{{last_name}}</p>
              <p><strong>PHONE:</strong> {{contact_num}}</p>
              <p v-show='pickup_notes'><strong>PICKUP NOTES:</strong> {{pickup_notes}}</p>
              <p v-show='dropoff_notes'><strong>PICKUP NOTES:</strong> {{dropoff_notes}}</p>
          </div>
      </template>
    </vue-swappable-card>
  </div>
</template>
<script>
  import { VueSwappableCard } from '@dafcoe/vue-swappable-card'
  import '@dafcoe/vue-swappable-card/dist/vue-swappable-card.css'
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date+'T'+time;
  export default {
    data: function () {
      return {
        isActive: true,
        dateTime: dateTime
      };
    },
  components: {
    VueSwappableCard
  },
  props: ['order_contents', 'order_notes', 'transaction_id', 'delivery_date', 'fulfillment_date', 'first_name', 'last_name', 'contact_num', 'pickup_notes', 'dropoff_notes']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overdue {
    padding: 16px 0 8px 0;
    background-color:  #B7221B;
    color: white;
  }
  .person-details {
    padding: 16px 8px;
  }

  .person-details p {
    margin-bottom:  16px;
  }

  .footer {
    text-align: right;
    border-top: 1px solid #eee;
    max-height: 42px;
    position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  }

  .notes {
    margin-bottom: 0;
  }

  .card {
    margin: 12px;
    min-width: 300px !important;
    max-width: 300px !important;
    min-height: 85vh !important
  }

  p {
    padding: 0 8px 8px 8px;
    font-size: 12px;
    margin: 0;
  }

  .btn-flat {
    z-index: 1000;
    color: white;
    padding: 8px 24px;
    border-radius: 4px;
    background: #1EDD88;
    transition: background 0.3s ease;
    font-size: 14px;
    padding: 6px 12px;
    margin: 4px;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
}

  .btn-flat:hover {
    background: #1BCB7F;
    color: white;
  }

  .vsc--from-bottom {
    min-height: 80vh;
  }

  .header {
    display:  flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }

  h5 {
    padding: 8px;
    margin:  8px 0;
  }

  .items {
    text-align:  left;
  }

  .hide {
    display: none;
  }
</style>
