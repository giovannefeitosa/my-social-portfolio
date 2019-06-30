<template>
  <ProfileWrapper>

    <ProfileHeader tab="Timeline" />

    <BlogPosts />

  </ProfileWrapper>
</template>

<script>
import ProfileWrapper from '@/components/Profile/ProfileWrapper'
import ProfileHeader from '@/components/Profile/ProfileHeader'
import BlogPosts from '@/components/Timeline/BlogPosts'

export default {
  components: { ProfileWrapper, ProfileHeader, BlogPosts }
}
</script>
