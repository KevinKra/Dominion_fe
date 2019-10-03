export const discardImage = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_DISCARD_IMAGE':
      return action.imgurl;
    case 'PURGE_DISCARD_PILE':
      return '';
    default:
      return state;
  }
};
