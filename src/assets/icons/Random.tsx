import * as React from "react";

function RandomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        transform="scale(2)"
        d="M12.4366 3.58058C12.8784 4.02236 13.247 4.52089 13.5354 5.06221C13.7449 5.45539 13.4874 5.92552 13.0608 5.97654L12.9838 5.98109H10.6614C10.3163 5.98109 10.0364 5.70127 10.0364 5.35609C10.0364 5.20889 10.0873 5.07358 10.1725 4.96678L10.2271 4.90659L11.0834 4.0499C9.12192 2.52332 6.2846 2.66151 4.48164 4.46447C3.70925 5.23686 3.24239 6.19908 3.08106 7.20096L3.07211 7.26123L3.0557 7.40068C3.02116 7.7412 2.73445 8.00031 2.39217 8.00031C2.06502 8.00031 1.7998 7.7351 1.7998 7.40795L1.80209 7.35617L1.81447 7.23249C1.81664 7.21354 1.81887 7.19542 1.82115 7.17814C1.99472 5.86247 2.58687 4.59146 3.59775 3.58058C6.03853 1.13981 9.99581 1.13981 12.4366 3.58058Z"
        fill="#00AE42"
      />
      <path
        transform="scale(2)"
        d="M3.56514 12.4197C3.12336 11.978 2.75476 11.4794 2.46636 10.9381C2.25688 10.5449 2.51434 10.0748 2.94097 10.0238L3.01795 10.0192H5.34028C5.68546 10.0192 5.96528 10.299 5.96528 10.6442C5.96528 10.7914 5.91439 10.9267 5.82925 11.0335L5.77466 11.0937L4.91829 11.9504C6.87981 13.477 9.71713 13.3388 11.5201 11.5358C12.2958 10.7601 12.7634 9.79294 12.9227 8.78641L12.9413 8.64689C12.9441 8.62111 12.9469 8.59407 12.9496 8.56577C12.9802 8.24499 13.2496 8 13.5718 8H13.6096C13.9366 8 14.2017 8.26513 14.2017 8.59218L14.1995 8.64375L14.1792 8.83274C14.0038 10.1446 13.4121 11.4116 12.404 12.4197C9.9632 14.8605 6.00592 14.8605 3.56514 12.4197Z"
        fill="#00AE42"
      />
    </svg>
  );
}

const Random = React.memo(RandomIcon);
export default Random;