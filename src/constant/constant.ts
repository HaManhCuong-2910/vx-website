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

export const dataStaff = [
  {
    img: '/assets/list-staff/Long.png',
    name: 'Phạm Hoàng Long',
    position: 'CEO/Founder/Creative Director'
  },
  {
    img: '/assets/list-staff/Linh.png',
    name: 'Nguyễn Phong Linh',
    position: 'Strategy Director'
  },
  {
    img: '/assets/list-staff/My.png',
    name: 'Trần Hà My',
    position: 'Executive Account'
  },
  {
    img: '/assets/list-staff/Huy.png',
    name: 'Trần Quang Huy',
    position: 'Co-Founder/Design Team Leader'
  },
  {
    img: '/assets/list-staff/Quynh.png',
    name: 'Lê Diễm Quỳnh',
    position: 'Creative Designer'
  },
  {
    img: '/assets/list-staff/HaAnh.png',
    name: 'Lê Hà Anh',
    position: 'Content Marketing Manager'
  },
  {
    img: '',
    name: 'Nguyễn Hồng Sơn',
    position: 'Creative Designer'
  }
]
