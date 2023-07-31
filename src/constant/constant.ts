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

export const slideBrand = [
  {
    img: '/img/brand_slide.png',
    content: 'Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không ?',
    createDate: '10.11.2022',
    tag: 'TRENDING'
  },
  {
    img: '/img/brand_slide.png',
    content: 'Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không ?',
    createDate: '10.11.2022',
    tag: 'TRENDING'
  },
  {
    img: '/img/brand_slide.png',
    content: 'Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không ?',
    createDate: '10.11.2022',
    tag: 'TRENDING'
  },
  {
    img: '/img/brand_slide.png',
    content: 'Trí tuệ nhân tạo và con người có thể song hành cùng nhau được hay không ?',
    createDate: '10.11.2022',
    tag: 'TRENDING'
  }
]

export const dataDropdownOption = [
  'Chức vụ mà bạn quan tâm',
  'Brand eXperience Designer',
  'UX/UI Designer',
  'Product Manager',
  'Account Executive',
  'Content Marketing',
  'Content Manager',
  'Project Manager',
  'Art Director',
  'Technology Advisor',
  'Project Sales Manager'
]

export enum ETypeForm {
  CONTACT = 'CONTACT',
  RECRUITMENT = 'RECRUITMENT'
}

export const handleResponseApi = (res: any) => {
  return res.data
}

export const removeBrTag = (text: string) => {
  return text.replaceAll('<br />', '').replaceAll('<br/>', '')
}
