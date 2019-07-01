<template>
  <ProfileWrapper>
    <ProfileHeader tab="Projects" no-pad-bottom />

    <BoxWrapper>
      <BoxContent>
        Projects under development
      </BoxContent>
    </BoxWrapper>
  </ProfileWrapper>
</template>

<script>
import ProfileWrapper from '@/components/Profile/ProfileWrapper'
import ProfileHeader from '@/components/Profile/ProfileHeader'

export default {
  components: { ProfileWrapper, ProfileHeader }
}
</script>
