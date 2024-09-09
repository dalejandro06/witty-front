import * as React from "react";

import { IconSvgProps } from "@/types";

export const LogoImage: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  fill,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 180 164"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1.41186 39.3038L0.892634 37.2052C-3.78763 18.2886 10.5275 0 30.0145 0H112.793C125.293 0 136.117 8.68237 138.829 20.8855C139.289 22.9557 141.125 24.4286 143.246 24.4286H161.339C163.767 24.4286 165.9 26.0405 166.562 28.3762L168.871 36.519C169.854 39.9845 167.251 43.4286 163.648 43.4286H6.68154C4.18562 43.4286 2.01131 41.7267 1.41186 39.3038ZM148.9 51.4069L179.638 156.666C180.658 160.161 178.016 163.651 174.375 163.616L39.1874 162.328H30.2911C28.2543 162.328 26.3933 161.197 25.4647 159.384C22.4329 153.465 15.8001 140.511 14.7589 138.429C13.4018 135.714 16.1161 135.714 18.8304 135.714H31.0446L6.97711 54.4705C5.94646 50.9914 8.55352 47.5 12.1821 47.5H143.689C146.101 47.5 148.224 49.0915 148.9 51.4069ZM65.461 102.943L59.5471 107.695C58.0202 108.922 57.7016 111.136 58.9298 112.662C79.4414 138.148 117.727 139.197 136.497 112.555C137.557 111.051 137.213 109.003 135.802 107.823L130.774 103.616C129.232 102.326 126.947 102.517 125.521 103.934C108.372 120.989 86.1787 119.747 70.76 103.408C69.3619 101.926 67.0489 101.667 65.461 102.943ZM66.7624 86.9502C70.9061 81.7707 78.2052 82.7625 81.2589 86.8342C82.8156 88.9098 85.7602 89.3305 87.8358 87.7738C89.9115 86.2171 90.3321 83.2725 88.7754 81.1968C82.4336 72.7411 67.8095 70.6011 59.4257 81.0808C57.8049 83.1068 58.1334 86.0631 60.1594 87.6839C62.1854 89.3047 65.1416 88.9762 66.7624 86.9502ZM118.841 86.8342C115.788 82.7625 108.489 81.7707 104.345 86.9502C102.724 88.9762 99.7677 89.3047 97.7418 87.6839C95.7158 86.0631 95.3873 83.1068 97.0081 81.0808C105.392 70.6011 120.016 72.7411 126.358 81.1968C127.915 83.2725 127.494 86.2171 125.418 87.7738C123.343 89.3305 120.398 88.9098 118.841 86.8342Z"
      fill={fill || "#F0F0F0"}
      fillRule="evenodd"
    />
  </svg>
);

export const ErrorLogo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  fill,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 38 35"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M0.298213 8.30177L0.188543 7.85851C-0.800026 3.86293 2.22363 0 6.33969 0H23.8241C26.4645 0 28.7507 1.83389 29.3235 4.41145C29.4207 4.84871 29.8085 5.15982 30.2564 5.15982H34.0782C34.591 5.15982 35.0414 5.50029 35.1813 5.99363L35.669 7.71357C35.8766 8.44556 35.3268 9.17301 34.5659 9.17301H1.41128C0.884088 9.17301 0.42483 8.81353 0.298213 8.30177ZM31.4509 10.8582L37.9433 33.0911C38.1589 33.8294 37.6009 34.5664 36.8318 34.5591L8.27734 34.2871H6.39825C5.96804 34.2871 5.57496 34.0481 5.37883 33.6652C4.73844 32.415 3.33746 29.6788 3.11754 29.239C2.83088 28.6657 3.4042 28.6656 3.97751 28.6657H6.55742L1.47386 11.5053C1.25616 10.7704 1.80683 10.033 2.57326 10.033H30.3502C30.8597 10.033 31.308 10.3691 31.4509 10.8582ZM13.8267 28.4276L12.5775 27.4238C12.255 27.1646 12.1877 26.697 12.4472 26.3747C16.7796 20.9915 24.8663 20.7699 28.831 26.3973C29.0548 26.7149 28.9822 27.1474 28.6842 27.3968L27.6221 28.2854C27.2964 28.5579 26.8138 28.5176 26.5127 28.2181C22.8903 24.6159 18.2027 24.8782 14.9459 28.3293C14.6506 28.6422 14.1621 28.6971 13.8267 28.4276ZM14.1017 18.3657C14.977 17.2716 16.5187 17.4811 17.1637 18.3412C17.4925 18.7796 18.1145 18.8684 18.5529 18.5396C18.9913 18.2108 19.0801 17.5888 18.7513 17.1504C17.4118 15.3644 14.3229 14.9124 12.5521 17.1259C12.2097 17.5539 12.2791 18.1783 12.707 18.5206C13.135 18.863 13.7594 18.7936 14.1017 18.3657ZM25.1019 18.3412C24.4569 17.4811 22.9152 17.2716 22.0399 18.3657C21.6976 18.7936 21.0732 18.863 20.6452 18.5206C20.2173 18.1783 20.1479 17.5539 20.4903 17.1259C22.2611 14.9124 25.35 15.3644 26.6895 17.1504C27.0183 17.5888 26.9295 18.2108 26.4911 18.5396C26.0527 18.8684 25.4307 18.7796 25.1019 18.3412Z"
      fill={fill || "#C64444"}
      fillRule="evenodd"
    />
  </svg>
);

export const TextLogo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 108 35"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.91837 27.8509C7.38306 27.8509 6.91194 27.4977 6.76185 26.9839L1.10765 7.62585L0.0519941 4.1499C0.0175204 4.03639 0 3.91841 0 3.79978V2.97315C0 2.30774 0.539425 1.76831 1.20484 1.76831H7.59197C8.16002 1.76831 8.6509 2.16508 8.77002 2.7205L12.3305 19.3221C12.3743 19.5265 12.555 19.6725 12.764 19.6725C12.9827 19.6725 13.1688 19.513 13.2022 19.2969L15.7553 2.789C15.8462 2.20167 16.3517 1.76831 16.946 1.76831H26.0706C26.6636 1.76831 27.1684 2.19986 27.2607 2.78567L29.2419 15.3622L29.7806 19.2927C29.8104 19.5103 29.9963 19.6725 30.2159 19.6725C30.4231 19.6725 30.6021 19.5278 30.6456 19.3252L34.2067 2.7205C34.3258 2.16508 34.8167 1.76831 35.3848 1.76831H41.6242C42.2896 1.76831 42.8291 2.30774 42.8291 2.97315V3.9787L41.7214 7.62585L36.1031 26.9819C35.9537 27.4967 35.4821 27.8509 34.946 27.8509H25.8665C25.2786 27.8509 24.7765 27.4266 24.6785 26.8469L21.8479 10.105C21.8108 9.88602 21.6212 9.72572 21.399 9.72572C21.1743 9.72572 20.9832 9.88972 20.9491 10.1119L20.3807 13.8149L18.2565 26.84C18.1614 27.4229 17.6579 27.8509 17.0673 27.8509H7.91837Z"
      fill="#66CC99"
    />
    <path
      d="M48.9032 8.71489C48.451 9.10513 47.7811 9.10513 47.3289 8.71489L43.7128 5.5944C43.1545 5.11258 43.1562 4.2467 43.7164 3.76704L47.3324 0.670931C47.7835 0.284751 48.4486 0.284751 48.8997 0.67093L52.5157 3.76704C53.0759 4.2467 53.0776 5.11258 52.5193 5.5944L48.9032 8.71489ZM45.2226 27.8509C44.5572 27.8509 44.0178 27.3115 44.0178 26.6461V15.6569L43.333 13.0541C43.2739 12.8293 43.281 12.5923 43.3536 12.3715L43.7085 11.2912C43.871 10.7968 44.3327 10.4625 44.8531 10.4625H50.9357C51.6011 10.4625 52.1405 11.0019 52.1405 11.6674V26.6461C52.1405 27.3115 51.6011 27.8509 50.9357 27.8509H45.2226Z"
      fill="#66CC99"
    />
    <path
      d="M61.7972 28.2193C59.6312 28.2193 58.0435 27.7772 57.0344 26.8931C56.0252 26.0089 55.5206 24.7195 55.5206 23.0249V17.3039C55.5206 16.6384 54.9811 16.099 54.3157 16.099H53.6609C52.9955 16.099 52.4561 15.5596 52.4561 14.8942V12.1826C52.4561 11.756 52.6818 11.3611 53.0494 11.1445L55.2105 9.8715C55.4128 9.75235 55.5759 9.57671 55.6797 9.36616L57.4414 5.79279C57.6443 5.3813 58.0633 5.12074 58.5221 5.12074H62.4016C63.067 5.12074 63.6064 5.66016 63.6064 6.32558V9.24539C63.6064 9.91558 64.1533 10.457 64.8235 10.4502L67.7651 10.4203C68.4353 10.4135 68.9822 10.9549 68.9822 11.6251V15.1097C68.9822 15.7703 68.4502 16.3078 67.7896 16.3145L64.799 16.3448C64.1384 16.3515 63.6064 16.8889 63.6064 17.5496V20.8173C63.6064 21.4859 64.1507 22.0266 64.8193 22.0222L67.9318 22.0015C68.6003 21.997 69.1446 22.5377 69.1446 23.2063V26.4245C69.1446 26.832 68.8728 27.1895 68.48 27.2983C68.037 27.3966 67.4462 27.5194 66.7078 27.6667C65.994 27.8141 65.2063 27.9369 64.3448 28.0351C63.4833 28.1579 62.6341 28.2193 61.7972 28.2193Z"
      fill="#66CC99"
    />
    <path
      d="M78.4927 28.2193C76.3267 28.2193 74.739 27.7772 73.7298 26.8931C72.7206 26.0089 72.216 24.7195 72.216 23.0249V17.3039C72.216 16.6384 71.6766 16.099 71.0112 16.099H70.4626C69.7972 16.099 69.2577 15.5596 69.2577 14.8942V12.148C69.2577 11.7401 69.4641 11.3599 69.8061 11.1377L71.7541 9.87179C71.9243 9.76119 72.0638 9.60938 72.1596 9.43046L74.1276 5.75665C74.3374 5.36512 74.7455 5.12074 75.1897 5.12074H79.097C79.7625 5.12074 80.3019 5.66016 80.3019 6.32558V9.25768C80.3019 9.92309 80.8413 10.4625 81.5067 10.4625H84.6353C85.3007 10.4625 85.8401 11.0019 85.8401 11.6674V15.1521C85.8401 15.8175 85.3007 16.3569 84.6353 16.3569H81.5067C80.8413 16.3569 80.3019 16.8963 80.3019 17.5617V20.8173C80.3019 21.4859 80.8462 22.0266 81.5147 22.0222L84.6273 22.0015C85.2958 21.997 85.8401 22.5377 85.8401 23.2063V26.4245C85.8401 26.832 85.5683 27.1895 85.1755 27.2983C84.7325 27.3966 84.1417 27.5194 83.4033 27.6667C82.6895 27.8141 81.9018 27.9369 81.0403 28.0351C80.1788 28.1579 79.3296 28.2193 78.4927 28.2193Z"
      fill="#66CC99"
    />
    <path
      d="M55.5209 34.5926C55.5169 34.5926 55.5186 34.5926 55.5146 34.5926H11.63C11.2989 34.5926 10.9824 34.4563 10.7548 34.2158L8.02806 31.3339C7.29947 30.5638 7.84883 29.296 8.90895 29.301L91.7236 29.6921C92.1505 29.6941 92.453 29.2762 92.3178 28.8713L91.7666 27.6667L86.9674 15.3422C86.9344 15.2576 86.9111 15.1695 86.898 15.0796L86.4183 11.8051C86.3118 11.078 86.8755 10.4257 87.6104 10.4257H93.6987C94.2828 10.4257 94.7827 10.8446 94.885 11.4196L96.6743 21.4825C96.7117 21.6928 96.8945 21.846 97.1081 21.846C97.3217 21.846 97.5046 21.6928 97.542 21.4825L99.3313 11.4196C99.4335 10.8446 99.9335 10.4257 100.518 10.4257H106.785C107.402 10.4257 107.855 11.0059 107.705 11.6046C107.532 12.3659 107.286 13.3851 106.966 14.6623C106.646 15.9394 106.277 17.3516 105.859 18.8988C105.44 20.4216 105.009 21.9688 104.566 23.5407C104.123 25.0879 103.68 26.5124 103.237 27.8141C102.228 30.8595 101.114 35 98.7443 35C96.3788 35 55.6513 34.5939 55.5209 34.5926Z"
      fill="#66CC99"
    />
  </svg>
);

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const EyeSlashFilledIcon: React.FC<IconSvgProps> = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
      fill="currentColor"
    />
    <path
      d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
      fill="currentColor"
    />
  </svg>
);

export const EyeFilledIcon: React.FC<IconSvgProps> = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
  </svg>
);

export const AWSBrand: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    {...props}
    fill="none"
    height={size || height}
    viewBox="0 0 100 100"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.2783 41.7728C28.2783 42.998 28.4107 43.9913 28.6425 44.7198C28.9074 45.4483 29.2386 46.243 29.7021 47.1039C29.8677 47.3688 29.9339 47.6337 29.9339 47.8655C29.9339 48.1966 29.7352 48.5278 29.3048 48.8589L27.2187 50.2496C26.9207 50.4483 26.6227 50.5476 26.3578 50.5476C26.0266 50.5476 25.6955 50.3821 25.3644 50.084C24.9008 49.5874 24.5035 49.0576 24.1723 48.5278C23.8412 47.9648 23.5101 47.3357 23.1458 46.5741C20.5631 49.6205 17.318 51.1436 13.4107 51.1436C10.6293 51.1436 8.41074 50.3489 6.78822 48.7595C5.16571 47.1701 4.33789 45.0509 4.33789 42.4019C4.33789 39.5874 5.33127 37.3026 7.35114 35.5807C9.371 33.8589 12.0531 32.998 15.4637 32.998C16.5895 32.998 17.7485 33.0973 18.9737 33.2629C20.1988 33.4284 21.4571 33.6933 22.7816 33.9913V31.5741C22.7816 29.0576 22.2518 27.3026 21.2253 26.2761C20.1657 25.2496 18.3776 24.7529 15.828 24.7529C14.669 24.7529 13.477 24.8854 12.2518 25.1834C11.0266 25.4814 9.83458 25.8456 8.67564 26.3092C8.14584 26.541 7.74849 26.6734 7.5167 26.7397C7.28491 26.8059 7.11935 26.839 6.9869 26.839C6.52332 26.839 6.29153 26.5079 6.29153 25.8125V24.19C6.29153 23.6602 6.35776 23.2629 6.52332 23.0311C6.68888 22.7993 6.9869 22.5675 7.45047 22.3357C8.60941 21.7397 10.0001 21.243 11.6227 20.8456C13.2452 20.4152 14.967 20.2165 16.7882 20.2165C20.7286 20.2165 23.6094 21.1105 25.4637 22.8986C27.2849 24.6867 28.2121 27.4019 28.2121 31.0443V41.7728H28.2783ZM14.8346 46.8059C15.9273 46.8059 17.0531 46.6072 18.2452 46.2099C19.4372 45.8125 20.4968 45.084 21.3909 44.0907C21.9207 43.4615 22.318 42.7662 22.5167 41.9715C22.7154 41.1768 22.8478 40.2165 22.8478 39.0907V37.6999C21.8876 37.4682 20.8611 37.2695 19.8015 37.137C18.7419 37.0046 17.7154 36.9383 16.6889 36.9383C14.4703 36.9383 12.8478 37.3688 11.7551 38.2629C10.6624 39.1569 10.1326 40.4152 10.1326 42.0708C10.1326 43.6271 10.5299 44.786 11.3578 45.5807C12.1525 46.4085 13.3114 46.8059 14.8346 46.8059ZM41.424 50.3821C40.828 50.3821 40.4306 50.2827 40.1657 50.0509C39.9008 49.8523 39.669 49.3887 39.4703 48.7595L31.6889 23.1635C31.4902 22.5013 31.3909 22.0708 31.3909 21.839C31.3909 21.3092 31.6558 21.0112 32.1856 21.0112H35.4306C36.0597 21.0112 36.4902 21.1105 36.722 21.3423C36.9869 21.541 37.1856 22.0046 37.3842 22.6337L42.9472 44.5542L48.1127 22.6337C48.2783 21.9715 48.477 21.541 48.7419 21.3423C49.0068 21.1436 49.4703 21.0112 50.0664 21.0112H52.7154C53.3445 21.0112 53.775 21.1105 54.0399 21.3423C54.3048 21.541 54.5366 22.0046 54.669 22.6337L59.9008 44.8191L65.6293 22.6337C65.828 21.9715 66.0597 21.541 66.2915 21.3423C66.5564 21.1436 66.9869 21.0112 67.5829 21.0112H70.6624C71.1922 21.0112 71.4902 21.2761 71.4902 21.839C71.4902 22.0046 71.4571 22.1701 71.424 22.3688C71.3909 22.5675 71.3246 22.8324 71.1922 23.1966L63.2121 48.7927C63.0134 49.4549 62.7816 49.8854 62.5167 50.084C62.2518 50.2827 61.8213 50.4152 61.2584 50.4152H58.4107C57.7816 50.4152 57.3511 50.3158 57.0862 50.084C56.8213 49.8523 56.5895 49.4218 56.4571 48.7595L51.3246 27.4019L46.2253 48.7264C46.0597 49.3887 45.8611 49.8191 45.5962 50.0509C45.3313 50.2827 44.8677 50.3821 44.2717 50.3821H41.424ZM83.9736 51.2761C82.2518 51.2761 80.5299 51.0774 78.8743 50.6801C77.2187 50.2827 75.9273 49.8523 75.0664 49.3556C74.5366 49.0576 74.1723 48.7264 74.0399 48.4284C73.9074 48.1304 73.8412 47.7993 73.8412 47.5013V45.8125C73.8412 45.1172 74.1061 44.786 74.6028 44.786C74.8015 44.786 75.0001 44.8191 75.1988 44.8854C75.3975 44.9516 75.6955 45.084 76.0266 45.2165C77.1525 45.7132 78.3776 46.1105 79.669 46.3754C80.9935 46.6403 82.2849 46.7728 83.6094 46.7728C85.6955 46.7728 87.318 46.4085 88.4438 45.6801C89.5697 44.9516 90.1657 43.892 90.1657 42.5344C90.1657 41.6072 89.8677 40.8456 89.2717 40.2165C88.6756 39.5874 87.5498 39.0244 85.9273 38.4946L81.126 37.0046C78.7087 36.243 76.9207 35.1172 75.8279 33.6271C74.7352 32.1701 74.1723 30.5476 74.1723 28.8258C74.1723 27.435 74.4703 26.2099 75.0664 25.1503C75.6624 24.0907 76.4571 23.1635 77.4505 22.435C78.4438 21.6734 79.5697 21.1105 80.8942 20.7132C82.2187 20.3158 83.6094 20.1503 85.0664 20.1503C85.7948 20.1503 86.5564 20.1834 87.2849 20.2827C88.0465 20.3821 88.7419 20.5145 89.4372 20.647C90.0995 20.8125 90.7286 20.9781 91.3246 21.1768C91.9207 21.3754 92.3842 21.5741 92.7154 21.7728C93.1789 22.0377 93.5101 22.3026 93.7087 22.6006C93.9074 22.8655 94.0068 23.2297 94.0068 23.6933V25.2496C94.0068 25.945 93.7419 26.3092 93.2452 26.3092C92.9803 26.3092 92.5498 26.1768 91.9869 25.9119C90.0995 25.0509 87.9803 24.6205 85.6293 24.6205C83.7419 24.6205 82.2518 24.9185 81.2253 25.5476C80.1988 26.1768 79.669 27.137 79.669 28.4946C79.669 29.4218 80.0001 30.2165 80.6624 30.8456C81.3246 31.4748 82.5498 32.1039 84.3048 32.6668L89.0068 34.1569C91.3909 34.9185 93.1127 35.9781 94.1392 37.3357C95.1657 38.6933 95.6624 40.2496 95.6624 41.9715C95.6624 43.3953 95.3644 44.6867 94.8015 45.8125C94.2054 46.9383 93.4107 47.9317 92.3842 48.7264C91.3578 49.5542 90.1326 50.1503 88.7087 50.5807C87.2187 51.0443 85.6624 51.2761 83.9736 51.2761Z"
      fill="#02101E"
      fillOpacity="0.68"
    />
    <path
      d="M90.2318 67.3689C79.3378 75.4152 63.5099 79.6868 49.9007 79.6868C30.8278 79.6868 13.6424 72.6338 0.662257 60.9119C-0.364233 59.9848 0.562919 58.7265 1.78808 59.455C15.8278 67.6007 33.1457 72.5344 51.0596 72.5344C63.1457 72.5344 76.4238 70.0179 88.6424 64.8523C90.4636 64.0245 92.0199 66.0444 90.2318 67.3689ZM94.7682 62.2033C93.3775 60.4152 85.5629 61.3424 82.0199 61.7728C80.9603 61.9053 80.7947 60.9781 81.755 60.2828C87.9801 55.9119 98.2119 57.1702 99.404 58.6272C100.596 60.1172 99.0729 70.349 93.245 75.2497C92.351 76.0113 91.4901 75.6139 91.8874 74.6205C93.2119 71.3424 96.1589 63.9583 94.7682 62.2033Z"
      fill="#02101E"
      fillOpacity="0.68"
    />
  </svg>
);
