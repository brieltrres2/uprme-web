import { useLocation, Link } from "react-router-dom";

export default function SmartLink({ to, children, ...props }) {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === to) {
      e.preventDefault(); // already on this page — do nothing
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}