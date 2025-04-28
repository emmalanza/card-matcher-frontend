import { Link } from "react-router-dom";
const LinkButton = ({ children, to, className, disabled = false }) => {
    return (
        <Link
            to={`/${to}`}
        >
            <button
                className={`p-2 rounded-md hover:scale-110 transition transform cursor-pointer
                disabled:hover:scale-100 disabled:opacity-50 disabled:pointer-events-none ${className}`}
                disabled={disabled}
            >
                {children}
            </button>
        </Link>
    )
}

export default LinkButton;