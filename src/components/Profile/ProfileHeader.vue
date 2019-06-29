<template>
<section class="ProfileHeader">
  
  <div class="profile-cover" :style="coverStyle"></div>
  
  <div class="profile-info">

    <div class="profile-photo" :style="photoStyle"></div>

    <div class="header-social-icons">
      <a class="social-link linkedin"
        href="https://www.linkedin.com/in/giovanneafonso/"
        target="_blank">
        <img src="@/assets/img/social/icon-linkedin.png" alt="">
      </a>

      <a class="social-link instagram"
        href="https://www.instagram.com/shakegioh/"
        target="_blank">
        <img src="@/assets/img/social/icon-instagram.png" alt="">
      </a>

      <a class="social-link github"
        href="https://github.com/shakegioh/my-social-portfolio/"
        target="_blank">
        <img src="@/assets/img/social/icon-github.png" alt="">
      </a>
    </div>

    <div class="user-title">
      <h1 class="username">Giovanne Feitosa Afonso</h1>
      <div class="userstatus">Unemployed Full Stack Developer</div>
    </div>

  </div>

  <nav class="profile-nav">
    <router-link
      v-for="t in tabs"
      :key="t.id"
      :to="{ name: t.route }"
      :class="{ 'profile-nav-link': true, active: isActive(t.id) }">
      {{ t.label }}
    </router-link>
  </nav>

</section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.ProfileHeader {
  @include contentBox();
  position: relative;
  background: #fff;
  z-index: 2;
  
  @media (min-width: $lg) {
    margin-top: 10px;
    overflow: hidden;
  }

  @media (max-width: $lg - 1) {
    border-bottom: 1px solid #ccc;
  }

  @media (min-width: $sm + 1) {
    .profile-cover {
      padding-top: 53%;
    }
    .profile-photo {
      left: 30px;
      top: -100px;
      width: 200px;
      height: 200px;
    }
    .profile-info {
      padding: 30px;
      padding-bottom: 15px;
    }
    .social-link {
      padding: 5px 15px;
    }
    .user-title {
      padding-top: 30px;
      .username {
        font-size: 32px;
      }
      .userstatus {
        font-size: 20px;
      }
    }
    .profile-nav-link {
      padding: 25px 5px;
      font-size: 18px;
    }
  }

  @media (min-width: $xs+1) and (max-width: $sm) {
    .profile-cover {
      padding-top: 80%;
    }
    .profile-photo {
      left: 15px;
      top: -80px;
      width: 170px;
      height: 170px;
    }
    .profile-info {
      padding: 15px;
    }
    .social-link {
      padding: 5px 15px;
    }
    .user-title {
      padding-top: 30px;
      .username {
        font-size: 28px;
      }
      .userstatus {
        font-size: 20px;
      }
    }
    .profile-nav-link {
      padding: 25px 5px;
      font-size: 16px;
    }
  }

  @media (max-width: $xs) {
    .profile-cover {
      padding-top: 70%;
    }
    .profile-photo {
      left: 10px;
      top: -50px;
      width: 130px;
      height: 130px;
    }
    .profile-info {
      padding: 15px;
      padding-bottom: 5px;
    }
    .social-link {
      padding: 5px 8px;
    }
    .user-title {
      padding-top: 20px;
      .username {
        font-size: 23px;
      }
      .userstatus {
        font-size: 17px;
      }
    }
    .profile-nav-link {
      padding: 25px 5px 15px 5px;
      font-size: 14px;
    }
  }
  
  .profile-cover {
    @include bgCover();
    width: 100%;
  }

  .profile-info {
    position: relative;
  }

  .profile-photo {
    @include bgCover();
    position: absolute;
    border-radius: 100%;
    border: 7px solid #fff; // 7 is my fav number
  }

  .header-social-icons {
    text-align: right;
    
    .social-link {
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
      transition: transform .3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .user-title {
    .username {
      font-weight: bold;
      line-height: 1.5em;
    }
    .userstatus {
      color: #666;
      line-height: 1em;
    }
  }

  .profile-nav {
    display: flex;
    width: 100%;
    background: linear-gradient(#fff,#e7e7e7);

    .profile-nav-link {
      flex: 1;
      text-align: center;
      text-decoration: none;
      color: #777;
      transition: color .3s;

      &:hover {
        color: #222;
      }

      &.active {
        &, &:hover, &:focus {
          font-weight: bold;
          color: #b11e89;
        }
      }
    }
  }

}
</style>


<script>
import cover from '@/assets/img/profile/cover.jpg'
import photo from '@/assets/img/profile/photo.jpg'

export default {

  props: {
    tab: String,
  },

  computed: {

    tabs() {
      return [
        { id: 'Timeline', label: 'Timeline', route: 'Timeline' },
        { id: 'Projects', label: 'Projects', route: 'Projects' },
        { id: 'Skills',   label: 'Skills',   route: 'Skills' },
        { id: 'About',    label: 'About',    route: 'About' },
      ]
    },

    coverStyle() {
      return {
        'background-image': "url('" + cover + "')"
      }
    },
    
    photoStyle() {
      return {
        'background-image': "url('" + photo + "')"
      }
    }

  },

  methods: {

    isActive(tab) {
      return this.tab === tab
    }

  }

}
</script>
