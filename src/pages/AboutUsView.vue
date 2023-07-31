<template>
  <div class="banner">
    <IntroAboutComponent />
    <LineAnimateComponentVue />
    <div class="pt-196">
      <div class="container-custom mx-auto z-10 relative">
        <TextMainIntroComponent />
      </div>
    </div>
  </div>
  <div class="pb-196">
    <MainIntroAboutComponentVue />
  </div>
  <div class="z-10 relative mt-14">
    <div class="flex justify-center">
      <div class="title-second">
        <h2 class="font-family-helvetica">Giá trị cốt lõi</h2>
      </div>
    </div>
    <div class="mt-83">
      <div class="mx-auto container-custom">
        <CoreValueComponent />
      </div>
    </div>
    <div class="mt-208">
      <CreativeServiceComponentVue />
    </div>
    <div class="mt-208">
      <CreativeTeamComponentVue />
    </div>
  </div>
</template>

<script setup>
import IntroAboutComponent from '@/components/about/IntroAboutComponent.vue'
import MainIntroAboutComponentVue from '@/components/about/MainIntroAboutComponent.vue'
import LineAnimateComponentVue from '@/components/util/LineAnimateComponent.vue'
import CoreValueComponent from '@/components/about/CoreValueComponent.vue'
import CreativeServiceComponentVue from '@/components/about/CreativeServiceComponent.vue'
import CreativeTeamComponentVue from '@/components/about/CreativeTeamComponent.vue'
import TextMainIntroComponent from '@/components/about/helper/TextMainIntroComponent.vue'
</script>

<style scoped lang="scss">
.banner {
  background-image: url('/about/bg_about.png');
  background-repeat: no-repeat;
  background-position: 15% 0%;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    display: block;
    background: linear-gradient(215deg, rgba(0, 0, 0, 0.55) 0.51%, #000000 89.91%);
    width: 100%;
    height: 100%;
  }
}
.pb-196 {
  padding-bottom: 196px;
}
.pt-196 {
  padding-top: 196px;
}
.mt-208 {
  margin-top: 208px;
}
.title-second {
  padding: 22px 25px 20px 25px;
  border-radius: 100px;
  border: 1px solid #fff;
  h2 {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
    text-transform: uppercase;
  }
}

.mt-14 {
  margin-top: 14px;
}
.mt-83 {
  margin-top: 83px;
}

@media screen and (max-width: 992px) {
  .pt-196 {
    padding-top: 178px;
  }
  .pb-196 {
    padding-bottom: 151px;
  }
  .mt-83 {
    margin-top: 48px;
  }
  .title-second {
    padding: 11px 15px 10px 15px;
    h2 {
      font-size: 12px;
      letter-spacing: 1.08px;
    }
  }

  .mt-208 {
    margin-top: 91px;
  }
}
</style>
