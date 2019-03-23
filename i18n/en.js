export default {
  base: {
    cancel: 'Cancel',
    completed: 'Completed',
    create: 'Create',
    edit: 'Edit',
    folder: 'Folder',
    hide: 'Hide',
    importance: 'Importance',
    planned: 'Planned',
    rename: 'Rename',
    setting: 'Setting',
    show: 'Show',
    sort: 'Sort',
    task: 'Task',
    delete: 'Delete',
    empty: 'Empty',
    submit: 'Submit',
    name: 'Name',
    loading: 'Loading',
    remind: 'Remind',
    time: 'Time',
    due: 'Due',
    repeat: 'Repeat',
    note: 'Note',
    me: 'Me',
    select: 'Select',
    successfully: 'Successfully',
    failed: 'Failed',
    async: 'Async',
    logout: 'Logout'
  },
  message: {
    enterToSubmit: 'Press Enter to Submit.',
    deleteSuccessfully: '@:base.delete @:base.successfully',
    deleteFailed: '@:base.delete @:base.failed',
    createSuccessfully: '@:base.create @:base.successfully',
    createFailed: '@:base.create @:base.failed'
  },
  date: {
    daily: 'Daily',
    weekDays: 'WeekDays',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    custom: 'Custom',
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    monday: 'Mon',
    tuesday: 'Tues',
    wednesday: 'Wed',
    thurday: 'Thur',
    firday: 'Fri',
    saturday: 'Sat',
    sunday: 'Sun'
  },
  folder: {
    create: '@:base.create @:base.folder',
    createFolder: '{0} @:base.folder',
    empty: '@:base.empty @:base.folder',
    name: '@:base.folder @:base.name'
  },
  task: {
    create: '@:base.create @:base.task',
    delete: '@:base.delete @:base.task',
    showCompleted: '@:base.show @:base.completed',
    showImportance: '@:base.show @:base.importance',
    showPlanned: '@:base.show @:base.planned',
    name: '@:base.task @:base.name',
    remindTime: '@:base.remind @:base.time',
    dueTime: '@:base.due @:base.time'
  }
}
