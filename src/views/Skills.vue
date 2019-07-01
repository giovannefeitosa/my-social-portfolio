<template>
  <ProfileWrapper>
    <ProfileHeader tab="Skills" no-pad-bottom />

    <BoxWrapper>
      <BoxContent>
        Skills under development
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
