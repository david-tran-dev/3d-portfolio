const Button = ({ name, isBeam = false, containerClass, as = 'button', href, ...props }) => {
  const Tag = as ? as : 'button';
  return (
    <Tag className={`btn ${containerClass}`} {...props} href={href}>
      {isBeam && (
        <span className="relative flex w-3 h-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </Tag>
  );
};

export default Button;
