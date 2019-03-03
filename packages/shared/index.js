export const isUserAllowed = (user, allowedUserTypes) =>
  user && allowedUserTypes && allowedUserTypes.includes(user.type)

const getFirstLetter = text => (String(text) ? text[0] : '')

export const getInitials = (firstName, lastName) =>
  getFirstLetter(firstName) + getFirstLetter(lastName)
