import { PROPERTIES_DATA } from '@/src/constants/finalConstants/Properties';
import { createSlice } from '@reduxjs/toolkit';

const properties = PROPERTIES_DATA;

const initialState = { properties };

function generateUniqueId(properties) {
  let newId = (properties?.length + 1).toString();
  while (properties?.some((property) => property?.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    addProperty: (state, action) => {
      const newProperty = {
        ...action.payload,
        id: generateUniqueId(state.properties),
      };
      state.properties?.push(newProperty);
    },

    updateProperty: (state, action) => {
      const { id, updatedProperty } = action.payload;
      const index = state.properties?.findIndex(
        (property) => property?.id === id
      );
      if (index !== -1) {
        state.properties[index] = {
          ...state.properties[index],
          ...updatedProperty,
        };
      }
    },

    deleteProperty: (state, action) => {
      const id = action.payload;
      state.properties = state.properties?.filter(
        (property) => property?.id !== id
      );
    },

    selectProperty: (state, action) => {
      const { id } = action.payload;
      state.selectedProperty =
        state.properties?.find((property) => property?.id === id) || null;
    },
  },
});

export const { addProperty, updateProperty, deleteProperty, selectProperty } =
  propertiesSlice.actions;
export default propertiesSlice.reducer;
