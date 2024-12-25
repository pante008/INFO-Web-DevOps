function Button({
    children,
    className = '',
    disabled = false,
    onClick,
    type = "button",
    visual = "button",
  }) {
    let buttonClass = "button";
    if (visual === "link") {
      buttonClass = "button-link";
    }
  
    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }
    };
  
    return (
      <button
        className={`${buttonClass} ${className}`}
        disabled={disabled}
        type={type}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
  
  export default Button;