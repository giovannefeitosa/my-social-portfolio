<template>
  <ProfileWrapper>
    <ProfileHeader tab="Skills" no-pad-bottom />

    <BoxWrapper>
      Skills under development
    </BoxWrapper>
  </ProfileWrapper>
</template>

<script>
import ProfileWrapper from '@/components/Profile/ProfileWrapper'
import ProfileHeader from '@/components/Profile/ProfileHeader'
import BoxWrapper from '@/components/Box/BoxWrapper'

export default {
  components: { ProfileWrapper, ProfileHeader, BoxWrapper }
}
</script>
