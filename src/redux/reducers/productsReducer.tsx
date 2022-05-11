import * as types from "../action-types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const ProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.PRODUCT_REQUEST:
      return {
        data: [],
        loading: true,
        error: "",
      };

    case types.PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case types.PRODUCT_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default ProductReducer;
