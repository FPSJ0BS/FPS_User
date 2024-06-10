function Accept({ color }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="accept-file"
            width={22}
            height={22}
        >
            <g data-name="Layer 2">
                <path
                    stroke={color}
                    d="M48,40.2V17s0,0,0-.06a1,1,0,0,0-.05-.26l0-.09a1,1,0,0,0-.2-.29l-12-12a1,1,0,0,0-.3-.2l-.09,0A1,1,0,0,0,35.05,4H9A1,1,0,0,0,8,5V59a1,1,0,0,0,1,1H47a1,1,0,0,0,.45-.12A10,10,0,0,0,48,40.2ZM44.59,16H36V7.41ZM10,58V6H34V17a1,1,0,0,0,1,1H46V40a10,10,0,0,0-6,18Zm36,0a8,8,0,1,1,8-8A8,8,0,0,1,46,58Z"
                />
                <path
                    stroke={color}
                    d="M45,50.59l-2.29-2.29-1.41,1.41,3,3a1,1,0,0,0,1.41,0l5-5-1.41-1.41Z"
                />
            </g>
        </svg>
    )
}

export default Accept
