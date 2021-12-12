<template>
  <div class="card">
    <vue-swappable-card event="click">>
      <template #content-primary>
          <div class="header">
            <div><h5>ORDER ID: XXXXX</h5></div>
            <div class="time"><h5>5:00 PM - 5:15 PM</h5></div>
          </div>
          <div class="items">
              <h5>Category Name</h5>
              <ul>
                <li>item</li>
                <li>item
                  <ul>
                      <li>Subitem 1</li>
                      <li>Subitem 2</li>
                  </ul>
                </li>
                <li>item</li>
              </ul>
              <H5 class='notes'>ORDER NOTES:</H5>
              <P>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</P>
          </div>
          <div class="footer">
            <a class="btn-flat" href="https://google.com">MARK AS READY</a>
          </div>
      </template>
      <template #content-secondary>
          <div class="header">
            <div><h5>ORDER ID: XXXXX</h5></div>
            <div class="time"><h5>5:00 PM - 5:15 PM</h5></div>
          </div>
          <div class="items person-details">
              <P><strong>NAME:</strong> </P>
              <P><strong>PHONE:</strong> </P>
              <P><strong>METHOD:</strong> </P>
              <P><strong>EMAIL:</strong> </P>
          </div>
      </template>
    </vue-swappable-card>
  </div>
</template>
<script>
  import { VueSwappableCard } from '@dafcoe/vue-swappable-card'
  import '@dafcoe/vue-swappable-card/dist/vue-swappable-card.css'

  export default {
  components: {
    VueSwappableCard
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .person-details {
    padding: 16px 8px;
  }

  .person-details p {
    margin-bottom:  16px;
  }

  .footer {
    text-align: right;
    border-top: 1px solid #eee;
  }

  .notes {
    margin-bottom: 0;
  }

  .card {
    margin: 12px;
    max-width: 30%;
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
</style>
