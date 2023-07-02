export const onSetActive = (event, isActive: boolean) => {
  const el = event.target.querySelector('img') || event.target
  if (el) {
    if (isActive) {
      el.src = '/icon/next-icon-active.png'
    } else {
      el.src = '/icon/next-icon.svg'
    }
  }
}
