export const list = () => {
  return {
    type: 'LIST',
    status: 1
  }
}
export const detail = () => {
  return {
    type: 'DETAIL',
    status: 2
  }
}
export const write = () => {
  return {
    type: 'WRITE',
    status: 3
  }
}
export const update = () => {
  return {
    type: 'UPDATE',
    status: 4
  }
}