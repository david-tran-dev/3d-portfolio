const Button = ({ name, isBeam = false, containerClass, ...props }) => {
  return (
    <button className={`btn ${containerClass}`} {...props}>
      {isBeam && (
        <span className="relative flex w-3 h-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
