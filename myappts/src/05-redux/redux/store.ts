import { createStore } from 'redux'

interface IAction {
  type: string
  payload?: any
}

interface IState {
  isShow: boolean
}

const reducer = (
  prevState: IState = {
    isShow: true,
  },
  action: IAction
) => {
  const { type } = action

  switch (type) {
    case 'show':
      return {
        ...prevState,
        isShow: true,
      }
    case 'hide':
      return {
        ...prevState,
        isShow: false,
      }

    default:
      return prevState
  }
}

const store = createStore(reducer)

export default store
