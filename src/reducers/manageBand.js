export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const bandObj = {name: action.name, id: Math.random()*10000000000000000}
      return { ...state, bands: [...state.bands, bandObj] }

    case 'DELETE_BAND':
      return {bands: state.bands.filter(b => b.id !== action.id)}

    default:
      return state;
  }
};
