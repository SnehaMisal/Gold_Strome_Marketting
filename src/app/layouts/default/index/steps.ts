export const defaultSteps = (stepService: any) => [
  {
    title : `<h4>Menu</h4>`,
    text: `<p class="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you. </p>`,
      attachTo: {
        element: '#first-tour',
        on: 'right'
      },
      buttons: [
        {
          type: 'next',
          text: 'Next'
        },
      ],
      id: 'first-tour'
  },
  {
    title : `<h4>Profile Setting</h4>`,
    text: `<p class="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>`,
      attachTo: {
        element: '#itemdropdown1',
        on: 'bottom'
      },
      buttons: [
        {
          type: 'back',
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          type: 'next',
          text: 'Next'
        }
      ],
      id: 'dropdown1'
  },
  {
    title : `<h4>Live Customizer</h4>`,
    text: `<p class="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here. </p>`,
      attachTo: {
        element: '#settingbutton',
        on: 'right'
      },
      buttons: [
        {
          type: 'back',
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          text: 'Done',
          action: () => {
            stepService.complete()
            localStorage.setItem('tour', 'true')
          }
        }
      ],
      id: 'title'
  },
]

export const defaultStepOptions = {
  classes: 'custom-class-name-1 custom-class-name-2',
  scrollTo: true,
  cancelIcon: {
    enabled: true
  },
  when: {
    cancel: () => {
      localStorage.setItem('tour', 'true')
    }
  }
}
