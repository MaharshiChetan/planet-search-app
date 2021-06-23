export const addEventListeners = (handleKeyUp) => {
  document.addEventListener('keyup', handleKeyUp);
};

export const removeEventListeners = (handleKeyUp) => {
  document.removeEventListener('keyup', handleKeyUp);
};
