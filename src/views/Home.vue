<template>
  <div>
    <!-- 头部nav-bar -->
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left" size="18"/>
      <van-icon name="cart" slot="right" size="18"/>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) of hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img" alt="">
            <div>{{ item.name }}</div>
            <div>{{ item.price }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      carouselItem: [
        {
          name: 'img1',
          imgSrc: 'https://img.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          name: 'img2',
          imgSrc: 'https://img.yzcdn.cn/vant/apple-2.jpg'
        },
        {
          name: 'img3',
          imgSrc: 'https://img.yzcdn.cn/vant/apple-3.jpg'
        }
      ],
      // 热门商品
      hotProducts: [
        // 热门商品
        {
          name: '   汽油动力手推割杆机 养殖场专用青储割晒机',
          img:
            'http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg',
          price: '3260',
          company: '  曲阜市润众机械制造有限',
          city: '曲阜市'
        },
        {
          name: '   手扶带牧草收割机 青储高杆作物割晒机价格',
          img:
            'http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg',
          price: '3260',
          company: '  曲阜市润众机械制造有限',
          city: '曲阜市'
        },
        {
          name: '   不缠秧的花生果子收割机 手扶马铃薯收获机',
          img:
            'http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg',
          price: '2800',
          company: '  曲阜市润众机械制造有限',
          city: '曲阜市'
        },
        {
          name: '   尤麦稻谷收割机厂家 高架手扶巨菌草割晒机',
          img:
            'http://img48.nongjx.com/2/20180903/636715656768329348895_198_170_5.jpg',
          price: '2900',
          company: '  济宁市任城区兴农机械厂',
          city: '济宁市'
        },
        {
          name: '   汽油动力手推割杆机 养殖场专用青储割晒机',
          img:
            'http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg',
          price: '3260',
          company: '  曲阜市润众机械制造有限',
          city: '曲阜市'
        },
        {
          name: '   手扶带牧草收割机 青储高杆作物割晒机价格',
          img:
            'http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg',
          price: '3260',
          company: '  曲阜市润众机械制造有限',
          city: '曲阜市'
        },
        {
          name: '   不缠秧的花生果子收割机 手扶马铃薯收获机',
          img:
            'http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg',
          price: '2800',
          company: '  曲阜市润众机械制造有限',
          city: '曲阜市'
        },
        {
          name: '   尤麦稻谷收割机厂家 高架手扶巨菌草割晒机',
          img:
            'http://img48.nongjx.com/2/20180903/636715656768329348895_198_170_5.jpg',
          price: '2900',
          company: '  济宁市任城区兴农机械厂',
          city: '济宁市'
        }
      ],
      swiperOption: {
        slidesPerView: 3
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}

</script>

<style lang="scss">
body {
  height: 2000px;
}
.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.carousel {
  margin-top: 1rem;
  height: 3rem;
  &-item {
    img {
      width: 100rem;
      height: 3rem;
    }
  }
}

.hot {
  &-title {
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    &-content {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
