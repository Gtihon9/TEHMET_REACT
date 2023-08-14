const PointSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <g filter="url(#filter0_d_114_2534)">
                <circle cx="20" cy="20" r="11" fill="#0591D9" />
            </g>
            <defs>
                <filter id="filter0_d_114_2534" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_114_2534" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                        values="0 0 0 0 0.0196078 0 0 0 0 0.568627 0 0 0 0 0.85098 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_2534" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_2534" result="shape" />
                </filter>
            </defs>
        </svg>

    );
}

export default PointSVG;