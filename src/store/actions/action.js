export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const MODIFIED_ITEM = 'MODIFIED_ITEM';


export function addItemAction(toDoContent) {
  return {
    type: ADD_ITEM,
    toDoContent
  }
};


export function modifiedItem(modifiedItem) {
  return {
    type: MODIFIED_ITEM,
    modifiedItem
  }
};


export function deleteItemAction(deleteItem) {
  return {
    type: DELETE_ITEM,
    deleteItem
  }
};
