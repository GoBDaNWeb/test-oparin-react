const Cart = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="9.5"
                y="3.5"
                width="12"
                height="5"
                fill="#323232"
                stroke="#323232"
            />
            <rect
                x="9.5"
                y="11.5"
                width="12"
                height="5"
                fill="#323232"
                stroke="#323232"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 2H0V0H7V19H24V21H5V2Z"
                fill="#323232"
            />
            <circle cx="9" cy="22" r="2" fill="#323232" />
            <circle cx="20" cy="22" r="2" fill="#323232" />
        </svg>
    );
};

export default Cart;
