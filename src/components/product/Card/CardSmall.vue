<template>
  <article class="card card-small">
    <button type="button" class="card__favorite">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#dedede" stroke-width="0.288"></g>
        <g id="SVGRepo_iconCarrier">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </g>
      </svg>
    </button>
    <div class="card__img">
      <img :src="item.img" alt="">
    </div>
    <div class="card__body">
      <div class="card__tag" :class="item.tag">{{item.tag}}</div>
      <h3>{{item.name}}</h3>
      <div class="card__tools">
        <span class="card__time">{{item.time}} • </span>
        <div class="card__rating">
          <img src="/images/product/star.svg" alt=""><span>{{item.rating}}</span>
        </div>
      </div>
    </div>
    <div class="card__footer">
      <div class="card__price">
        ${{ item.price }}<span>.{{ item.priceCent }}</span>
      </div>
      <button
          type="button"
          class="card__add"
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_1_16678" fill="white">
            <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"/>
          </mask>
          <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z" fill="black"/>
          <path d="M15.2818 9.36025V13.4693H19.3908V9.36025H15.2818ZM8.94222 9.36025V5.2512H4.83317V9.36025H8.94222ZM8.94222 15.7891V19.8982H13.0513V15.7891H8.94222ZM6.41234 15.7891H2.30329V19.8982H6.41234V15.7891ZM6.41234 9.36025H10.5214V5.2512H6.41234V9.36025ZM0.102539 9.36025H-4.00651V13.4693H0.102539V9.36025ZM0.102539 7.06848V2.95943H-4.00651V7.06848H0.102539ZM6.41234 7.06848V11.1775H10.5214V7.06848H6.41234ZM6.41234 0.609863V-3.49919H2.30329V0.609863H6.41234ZM8.94222 0.609863H13.0513V-3.49919H8.94222V0.609863ZM8.94222 7.06848H4.83317V11.1775H8.94222V7.06848ZM15.2818 7.06848H19.3908V2.95943H15.2818V7.06848ZM15.2818 5.2512H8.94222V13.4693H15.2818V5.2512ZM4.83317 9.36025V15.7891H13.0513V9.36025H4.83317ZM8.94222 11.6801H6.41234V19.8982H8.94222V11.6801ZM10.5214 15.7891V9.36025H2.30329V15.7891H10.5214ZM6.41234 5.2512H0.102539V13.4693H6.41234V5.2512ZM4.21159 9.36025V7.06848H-4.00651V9.36025H4.21159ZM0.102539 11.1775H6.41234V2.95943H0.102539V11.1775ZM10.5214 7.06848V0.609863H2.30329V7.06848H10.5214ZM6.41234 4.71891H8.94222V-3.49919H6.41234V4.71891ZM4.83317 0.609863V7.06848H13.0513V0.609863H4.83317ZM8.94222 11.1775H15.2818V2.95943H8.94222V11.1775ZM11.1727 7.06848V9.36025H19.3908V7.06848H11.1727Z" fill="white" mask="url(#path-1-inside-1_1_16678)"/>
        </svg>

      </button>
    </div>
  </article>
</template>

<script setup>
const {item} = defineProps({
  item: Object
})
</script>

<style scoped lang="scss">
@import "../../../styles/card";

</style>