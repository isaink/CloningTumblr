export let TOGGLE = "TOGGLE";

export const togglebuttons = (buttons) => {
    return{
      type: TOGGLE,
      buttons: buttons
    }
  }
  