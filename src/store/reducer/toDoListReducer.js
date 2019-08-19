import {
  ADD_ITEM,
  MODIFIED_ITEM,
  DELETE_ITEM
} from '../actions/action'

const initState = {
  list: [{
    name: 'write home work',
    id: 0
  }, {
    name: 'doing exercise',
    id: 1
  }, {
    name: 'go to grocery: drink, vegetable',
    id: 2
  }]
}

const toDoReducer = (state = initState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, {
          name: action.toDoContent,
          id: state.list.length
        }]
      }
    case MODIFIED_ITEM:
      let newItem = state.list.map((item, index) => {
        if (parseInt(action.modifiedItem.id, 10) === item.id) {
          item.name = action.modifiedItem.name
        }
        return item
      });
      return {
        ...state,
        list: [...newItem]
      }
    case DELETE_ITEM:
      const newRestItem = state.list.filter(item => {
        return action.deleteItem.id !== item.id;
      });
      return {
        ...state,
        list: [...newRestItem]
      }
    default:
      return state
  }
}

export default toDoReducer;
