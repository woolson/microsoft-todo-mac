<template lang="pug">
div.task-item.u-bb(
  ref="root"
  :class="{\
    active: currentTask.Id === data.Id,\
    completed: data.Status === 'Completed'\
  }"
  @click="updateState({\
    currentTaskId: data.Id,\
    showTaskDetailModal: true\
  })"
)
  i.iconfont.u-mr5(
    :class="checkClass"
    @click.stop="changeTaskStatus"
  )
  div.task-item__content
    span(
      v-line-clamp:14="1"
      :style="titleStyle"
      :title="data.Subject"
    ) {{data.Subject}}
    i.u-ml10.u-gray(
      v-if="data.IsReminderOn || data.Body.Content || data.HasAttachments"
    ) &#8226
    i.el-icon-bell(
      v-show="data.IsReminderOn"
      :title="$t('base.remind')"
    )
    i.el-icon-paperclip(
      v-show="data.HasAttachments"
      :title="$t('base.attachment')"
    )
    i.el-icon-document-add(
      v-show="data.Body.Content"
      :title="$t('base.note')"
    )
  i.iconfont.u-ml10(
    :class="starClass"
    @click.stop="changeTaskImportance"
  )
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapState([
      'theme'
    ]),
    ...mapGetters([
      'currentTask'
    ]),
    titleStyle () {
      const { Status } = this.data
      return {
        textDecoration: Status === 'Completed' ? 'line-through' : 'none',
        color: Status === 'Completed'
          ? '#AAAAAA !important'
          : ''
      }
    },
    checkClass () {
      return this.data.Status === 'Completed' ? 'icon-check' : 'icon-check-o'
    },
    starClass () {
      return this.data.Importance === 'High' ? 'icon-star' : 'icon-star-o'
    }
  },

  watch: {
    currentTask: {
      handler () {
        if (this.data.Id === this.currentTask.Id) {
          this.$refs.root.scrollIntoViewIfNeeded()
        }
      },
      deep: true
    }
  },

  methods: {
    ...mapMutations({
      updateState: 'UPDATE_STATE'
    }),
    ...mapActions({
      updateTask: 'UPDATE_TASK'
    }),
    async changeTaskStatus () {
      try {
        await this.updateTask({
          Id: this.data.Id,
          Status: this.data.Status === 'Completed' ? 'NotStarted' : 'Completed'
        })
        this.$message.success(this.$root.$t('message.updateSuccessfully'))
      } catch (err) {
        console.log(err)
        this.$message.error(this.$t('message.updateFailed'))
      }
    },
    async changeTaskImportance () {
      try {
        await this.updateTask({
          Id: this.data.Id,
          Importance: this.data.Importance === 'High' ? 'Normal' : 'High'
        })
        this.$message.success(this.$t('message.updateSuccessfully'))
      } catch (err) {
        this.$message.error(this.$t('message.updateFailed'))
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.task-item
  display flex
  align-items center
  background var(--background-content)
  padding 0 12px 0 5px
  line-height 45px
  background-size 0px 100%
  position relative
  transition all .3s
  cursor pointer
  user-select none
  box-sizing border-box
  color var(--text-main)
  border-left 0 solid $blue
  > i
    &.icon-check
    &.icon-check-o
      padding 0 5px
      $size-text-large
    &.icon-check
      color $green
    &.icon-star
      color $yellow
    &:hover
      font-weight bold
      // animation bounceIn .75s
  &:first-child
    border-top-left-radius 5px
    border-top-right-radius 5px
  &:last-child
    border-bottom-left-radius 5px
    border-bottom-right-radius 5px
    &:after
      display none
  &.active
    background var(--task-background-active)
    .task-item__info
      background var(--task-info-background)
  &.completed
    *
      opacity .9
  &:hover
    border-width 3px

.task-item__content
  flex 1
  display flex
  margin-right 15px
  height 45px
  span
    // max-width 240px
    line-height 45px
    font-size $size-text-medium
    // font-weight normal
    margin 0
    color var(--text-main)
    // text-overflow ellipsis
    // white-space nowrap
    // overflow hidden
  i
    font-size 11px
    margin-left 8px
    // opacity .7
    line-height 45px

.task-item__info
  // width 100%
  display inline-block
  width auto
  margin-top 6px
  background var(--task-info-background)
  padding 3px 8px
  padding-right 0px
  border-radius 4px
  box-sizing border-box
  transition all .2s
  i
    margin-right 10px
    $size-text-small
    color var(--text-main)
    &.icon-bell
      font-size 13px
</style>
