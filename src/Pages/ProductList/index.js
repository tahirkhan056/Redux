import { connect } from "react-redux";
import { getProducts } from "../../Action/Product";
import Listing from "../../Compoenents/Listing";

const mapStateToProps = (state) => {
  return {
    items: state.products,
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Listing);
