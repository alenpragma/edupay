import PropTypes from "prop-types";
const Container = ({ children, className }) => {
  return (
    <div className={`w-full xl:max-w-[1530px] lg:max-w-[1250px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};
export default Container;
