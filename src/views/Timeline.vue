<template>
  <ProfileWrapper>

    <ProfileHeader tab="Timeline" />

    <div class="timeline-content-wrapper">
      
      <div class="timeline-sidebar">
        <BoxWrapper>
          <BoxContent>
            <h3 class="welcome-title">Welcome to my social portfolio!</h3>

            <p class="welcome-message">
              I'm glad you're here, but this
              is still a work in progress. If you want to talk to me, please
              send me an e-mail.
            </p>

            <p class="welcome-email">
              giovanneafonso@gmail.com
            </p>
          </BoxContent>
        </BoxWrapper>
      </div>

      <div class="timeline-posts">
        <BlogPosts />
      </div>

    </div>

  </ProfileWrapper>
</template>

<style lang="scss">
.timeline-content-wrapper {
  display: flex;
  justify-content: center;
}
.timeline-posts {
  flex: 0 1 500px;
}
.timeline-sidebar {
  flex: 1;
  padding-right: 10px;
}

@media (max-width: 609px) {
  .timeline-sidebar {
    display: none;
  }
  .timeline-posts {
    padding: 0 10px;
  }
}

.welcome-title {
  margin-bottom: 10px;
  font-size: 16px;
}
.welcome-message {
  margin-bottom: 20px;
  font-size: 15px;
  color: #666;
}
.welcome-email {
  font-size: 15px;
}
</style>


<script>
import ProfileWrapper from '@/components/Profile/ProfileWrapper'
import ProfileHeader from '@/components/Profile/ProfileHeader'
import BlogPosts from '@/components/Timeline/List/BlogPosts'

export default {
  components: { ProfileWrapper, ProfileHeader, BlogPosts }
}
</script>
