export const isServer = typeof window === 'undefined'

const getFirstLetter = text => (text ? text[0] : '')

export const getInitials = (firstName, lastName) =>
  getFirstLetter(firstName) + getFirstLetter(lastName)
