interface Props {
  id: string;
}

export const SvgSelector = ({ id }: Props) => {
  switch (id) {
    case "wind":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-[25px] h-[30px] text-white"
        >
          <path d="M31.4 193.2h306.8c53.6 0 97.1-40.9 97.1-91.1S391.8 11 338.2 11c-53.6 0-97.1 40.9-97.1 91.1 0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4 0-27.7 25.3-50.3 56.3-50.3 31 0 56.3 22.5 56.3 50.3 0 27.7-25.3 50.3-56.3 50.3H31.4c-11.3 0-20.4 9.1-20.4 20.4s9.1 20.4 20.4 20.4zM338.2 318.8H31.4c-11.3 0-20.4 9.1-20.4 20.4s9.1 20.4 20.4 20.4h306.8c31 0 56.3 22.6 56.3 50.3 0 27.7-25.3 50.3-56.3 50.3-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4 53.6 0 97.1-40.9 97.1-91.1.1-50.2-43.5-91.1-97.1-91.1z"></path>
          <path d="M480.6 177.3c-11.3 0-20.4 9.1-20.4 20.4 0 22.8-23.6 41.3-52.6 41.3H31.4c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h376.2c51.5 0 93.4-36.8 93.4-82.1 0-11.3-9.1-20.4-20.4-20.4z"></path>
        </svg>
      );

    case "pop":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 256.68 256.68"
          version="1.1"
          viewBox="0 0 256.68 256.68"
          xmlSpace="preserve"
          fill="currentColor"
          className="w-[25px] h-[30px] text-white"
        >
          <path d="M99.369 91.118a9.001 9.001 0 00-15.932 0l-42.534 80.88c-9.362 17.803-8.898 38.848 1.24 56.294 9.933 17.092 27.559 27.69 47.146 28.352a61.823 61.823 0 004.222 0c19.591-.662 37.217-11.261 47.15-28.353 10.139-17.446 10.603-38.491 1.24-56.293l-42.532-80.88zm25.73 128.129c-6.901 11.876-18.636 18.949-32.198 19.407-.995.034-1.997.035-3 0-13.559-.458-25.293-7.531-32.195-19.407-7.006-12.056-7.332-26.587-.872-38.872l34.568-65.733 34.568 65.733c6.46 12.285 6.135 26.816-.871 38.872zM219.636 150.095l-22.432-51.498a9 9 0 00-16.502 0l-22.432 51.498c-4.494 10.317-3.627 22.205 2.317 31.801 5.87 9.475 15.55 15.229 26.563 15.788a35.91 35.91 0 003.609-.001c11.009-.558 20.689-6.313 26.559-15.787 5.946-9.596 6.812-21.484 2.318-31.801zm-17.618 22.321c-2.713 4.378-7.148 7.036-12.165 7.29-.596.03-1.208.03-1.795 0-5.021-.255-9.456-2.912-12.168-7.291-2.834-4.574-3.251-10.231-1.117-15.132l14.181-32.555 14.181 32.555c2.134 4.902 1.717 10.558-1.117 15.133zM137.794 104.491a35.114 35.114 0 003.619 0c11.008-.558 20.688-6.312 26.559-15.786 5.945-9.596 6.812-21.484 2.317-31.801L147.857 5.406a9 9 0 00-16.502 0l-22.432 51.498c-4.494 10.317-3.627 22.205 2.318 31.801 5.87 9.475 15.55 15.229 26.553 15.786zm-12.369-40.398l14.181-32.556 14.18 32.555c2.135 4.901 1.718 10.558-1.116 15.133-2.713 4.378-7.148 7.035-12.174 7.29-.589.03-1.185.03-1.786 0-5.021-.254-9.456-2.912-12.168-7.29-2.834-4.574-3.252-10.231-1.117-15.132z"></path>
          <path d="M91.544 213.662c-5.06-.171-9.444-2.82-12.029-7.269-2.649-4.558-2.774-10.047-.335-14.685a9 9 0 00-15.932-8.378c-5.341 10.156-5.078 22.159.704 32.107 5.68 9.774 15.768 15.835 26.985 16.214a9 9 0 00.607-17.989z"></path>
        </svg>
      );

    case "pres":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 256.68 256.68"
          version="1.1"
          viewBox="0 0 256.68 256.68"
          xmlSpace="preserve"
          fill="currentColor"
          className="w-[25px] h-[30px] text-white"
        >
          <path d="M99.369 91.118a9.001 9.001 0 00-15.932 0l-42.534 80.88c-9.362 17.803-8.898 38.848 1.24 56.294 9.933 17.092 27.559 27.69 47.146 28.352a61.823 61.823 0 004.222 0c19.591-.662 37.217-11.261 47.15-28.353 10.139-17.446 10.603-38.491 1.24-56.293l-42.532-80.88zm25.73 128.129c-6.901 11.876-18.636 18.949-32.198 19.407-.995.034-1.997.035-3 0-13.559-.458-25.293-7.531-32.195-19.407-7.006-12.056-7.332-26.587-.872-38.872l34.568-65.733 34.568 65.733c6.46 12.285 6.135 26.816-.871 38.872zM219.636 150.095l-22.432-51.498a9 9 0 00-16.502 0l-22.432 51.498c-4.494 10.317-3.627 22.205 2.317 31.801 5.87 9.475 15.55 15.229 26.563 15.788a35.91 35.91 0 003.609-.001c11.009-.558 20.689-6.313 26.559-15.787 5.946-9.596 6.812-21.484 2.318-31.801zm-17.618 22.321c-2.713 4.378-7.148 7.036-12.165 7.29-.596.03-1.208.03-1.795 0-5.021-.255-9.456-2.912-12.168-7.291-2.834-4.574-3.251-10.231-1.117-15.132l14.181-32.555 14.181 32.555c2.134 4.902 1.717 10.558-1.117 15.133zM137.794 104.491a35.114 35.114 0 003.619 0c11.008-.558 20.688-6.312 26.559-15.786 5.945-9.596 6.812-21.484 2.317-31.801L147.857 5.406a9 9 0 00-16.502 0l-22.432 51.498c-4.494 10.317-3.627 22.205 2.318 31.801 5.87 9.475 15.55 15.229 26.553 15.786zm-12.369-40.398l14.181-32.556 14.18 32.555c2.135 4.901 1.718 10.558-1.116 15.133-2.713 4.378-7.148 7.035-12.174 7.29-.589.03-1.185.03-1.786 0-5.021-.254-9.456-2.912-12.168-7.29-2.834-4.574-3.252-10.231-1.117-15.132z"></path>
          <path d="M91.544 213.662c-5.06-.171-9.444-2.82-12.029-7.269-2.649-4.558-2.774-10.047-.335-14.685a9 9 0 00-15.932-8.378c-5.341 10.156-5.078 22.159.704 32.107 5.68 9.774 15.768 15.835 26.985 16.214a9 9 0 00.607-17.989z"></path>
        </svg>
      );

    case "rh":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-moisture w-[25px] h-[30px] text-white"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 0a.5.5 0 000 1H15v2.75h-.5a.5.5 0 000 1h.5V7.5h-1.5a.5.5 0 000 1H15v2.75h-.5a.5.5 0 000 1h.5V15h-1.5a.5.5 0 000 1h2a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 00-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 00-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 00-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0l-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path>
        </svg>
      );

    case "clouds":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 297 297"
          version="1.1"
          viewBox="0 0 297 297"
          xmlSpace="preserve"
          fill="currentColor"
          className="w-[25px] h-[30px] text-white"
        >
          <path d="M297 136.323c0-26.571-19.465-48.683-44.885-52.821-4.065-17.137-19.496-29.921-37.857-29.921-11.905 0-23.075 5.484-30.393 14.63-9.301.275-17.778 3.846-24.338 9.564a61.252 61.252 0 00-32.946-9.581c-26.92 0-50.84 17.866-58.805 43.182a48.391 48.391 0 00-28.007 35.564C17.169 151.124 0 170.982 0 194.775c0 26.823 21.822 48.645 48.645 48.645h142.882c31.535 0 57.598-23.811 61.195-54.395C277.841 184.633 297 162.68 297 136.323zm-105.474 87.742H48.645c-16.151 0-29.29-13.139-29.29-29.29s13.139-29.291 29.29-29.291c5.344 0 9.677-4.333 9.677-9.677 0-12.834 8.214-24.057 20.441-27.926a9.678 9.678 0 006.532-7.154c4.216-19.224 21.578-33.177 41.286-33.177 23.313 0 42.28 18.966 42.28 42.28 0 .311-.012.619-.023.928l-.014.422a9.677 9.677 0 0012.094 9.668 42.425 42.425 0 0110.609-1.341c23.314 0 42.28 18.966 42.28 42.279-.001 23.312-18.967 42.279-42.281 42.279zm60.389-54.636c-5.738-28.084-30.635-49.277-60.389-49.277-1.352 0-2.704.044-4.05.132-1.728-11.068-6.413-21.17-13.218-29.47a19.381 19.381 0 0110.773-3.264c.812 0 1.643.056 2.543.172a9.668 9.668 0 009.656-4.835c3.471-6.138 9.996-9.951 17.027-9.951 10.779 0 19.548 8.769 19.548 19.548 0 5.344 4.333 9.677 9.677 9.677 18.837 0 34.162 15.325 34.162 34.162.001 15.928-10.957 29.342-25.729 33.106z"></path>
        </svg>
      );

    case "vis":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 511.999 511.999"
          version="1.1"
          viewBox="0 0 511.999 511.999"
          xmlSpace="preserve"
          fill="currentColor"
          className="w-[25px] h-[30px] text-white"
        >
          <path d="M507.836 244.912c-1.147-1.312-28.596-32.502-72.998-63.93-59.487-42.105-121.329-64.362-178.84-64.362-57.51 0-119.352 22.256-178.839 64.362C32.758 212.41 5.308 243.6 4.162 244.912c-5.549 6.35-5.549 15.824 0 22.174 1.147 1.312 28.596 32.502 72.998 63.931 59.487 42.105 121.329 64.362 178.839 64.362 57.511 0 119.353-22.256 178.84-64.362 44.402-31.428 71.852-62.618 72.998-63.931 5.549-6.349 5.549-15.824-.001-22.174zM255.998 361.679c-63.521 0-121.363-31.375-158.701-57.696-25.869-18.236-45.799-36.671-57.155-47.984 11.357-11.315 31.289-29.749 57.155-47.984 37.338-26.321 95.18-57.696 158.701-57.696 63.522 0 121.364 31.375 158.702 57.696 25.863 18.232 45.792 36.663 57.15 47.979-29.299 29.152-115.769 105.685-215.852 105.685z"></path>
          <path d="M255.998 214.787c-22.724 0-41.212 18.488-41.212 41.212s18.488 41.212 41.212 41.212 41.212-18.488 41.212-41.212-18.487-41.212-41.212-41.212zm0 48.725c-4.143 0-7.513-3.37-7.513-7.513s3.37-7.513 7.513-7.513 7.513 3.37 7.513 7.513-3.37 7.513-7.513 7.513z"></path>
          <path d="M255.998 160.758c-52.516 0-95.241 42.726-95.241 95.242s42.724 95.242 95.241 95.242S351.24 308.517 351.24 256s-42.725-95.242-95.242-95.242zm0 156.784c-33.934 0-61.541-27.608-61.541-61.542s27.607-61.542 61.541-61.542S317.54 222.066 317.54 256s-27.607 61.542-61.542 61.542z"></path>
        </svg>
      );

    case "geo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      );

    case "weatherSunny":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          version="1.1"
          viewBox="0 0 512.002 512.002"
          xmlSpace="preserve"
          className=""
        >
          <g fill="#ffffff">
            <path d="M182.223 107.452c-7.658 0-13.866-6.208-13.866-13.866v-40.84c0-7.658 6.208-13.866 13.866-13.866 7.658 0 13.866 6.208 13.866 13.866v40.842c0 7.656-6.208 13.864-13.866 13.864zM272.39 144.801a13.82 13.82 0 01-9.805-4.061c-5.415-5.415-5.415-14.195 0-19.611l8.718-8.718c5.416-5.415 14.194-5.415 19.611 0 5.415 5.415 5.415 14.195 0 19.611l-8.718 8.718a13.828 13.828 0 01-9.806 4.061zM83.338 333.853a13.823 13.823 0 01-9.805-4.061c-5.415-5.415-5.416-14.195 0-19.61l8.718-8.719c5.415-5.415 14.195-5.416 19.61 0 5.415 5.416 5.416 14.195 0 19.61l-8.718 8.719a13.825 13.825 0 01-9.805 4.061zM92.056 144.801a13.821 13.821 0 01-9.805-4.061l-8.718-8.718c-5.415-5.415-5.415-14.195 0-19.611s14.195-5.415 19.611 0l8.718 8.718c5.415 5.415 5.415 14.195 0 19.611a13.83 13.83 0 01-9.806 4.061zM54.708 234.968H13.866C6.208 234.968 0 228.76 0 221.101c0-7.658 6.208-13.866 13.866-13.866h40.842c7.658 0 13.866 6.208 13.866 13.866.001 7.659-6.207 13.867-13.866 13.867zM311.447 473.122H165.819c-41.455 0-75.182-33.727-75.182-75.183 0-7.658 6.208-13.866 13.866-13.866s13.866 6.208 13.866 13.866c0 26.164 21.286 47.451 47.449 47.451h145.627c7.657 0 13.866 6.208 13.866 13.866s-6.207 13.866-13.864 13.866z"></path>
          </g>
          <path
            fill="#ffffff"
            d="M471.051 331.009c3.594-11.282 5.409-23.018 5.409-35.043 0-63.882-51.972-115.855-115.856-115.855a115.813 115.813 0 00-76.807 29.117c-2.636-22.509-12.702-43.909-29.247-60.454-19.32-19.32-45.007-29.96-72.33-29.96s-53.01 10.64-72.329 29.96-29.96 45.007-29.96 72.329 10.64 53.01 29.96 72.33a101.834 101.834 0 0023.161 17.356 105.162 105.162 0 00-2.033 20.554c0 3.303.166 6.711.495 10.132.731 7.624 7.507 13.208 15.128 12.478 7.624-.731 13.209-7.504 12.478-15.128a78.696 78.696 0 01-.367-7.482 76.888 76.888 0 014.175-25.005c.236-.689.473-1.378.729-2.066.207-.552.43-1.097.649-1.642.25-.623.499-1.245.765-1.859 10.874-25.147 34.723-43.422 63.064-46.316.079-.008.159-.011.238-.019a76.003 76.003 0 013.625-.276c.553-.028 1.111-.029 1.665-.046.763-.024 1.524-.057 2.292-.058 1.302 0 2.61.032 3.921.096l.094.003c.245.012.487.039.732.054 1.065.064 2.126.136 3.178.243.111.011.22.029.331.04.39.043.77.096 1.155.146.796.096 1.595.183 2.384.304.076.011.151.028.227.039.162.025.32.058.483.086 1.04.169 2.077.345 3.102.556.101.021.201.047.302.068 1.155.241 2.303.503 3.44.796.079.021.158.046.237.065 1.155.301 2.303.625 3.437.978.057.018.112.039.168.055 31.367 9.846 54.185 39.188 54.185 73.761 0 7.658 6.209 13.866 13.866 13.866s13.866-6.208 13.866-13.866c0-37.766-20.045-70.929-50.046-89.438 16.551-21.288 42.122-34.058 69.585-34.058 48.592 0 88.123 39.531 88.123 88.122 0 12.905-2.746 25.366-8.162 37.036a13.866 13.866 0 008.891 19.203c20.494 5.651 34.809 24.457 34.809 45.733 0 26.164-21.286 47.451-47.451 47.451H394.43c-7.657 0-13.866 6.208-13.866 13.866s6.209 13.866 13.866 13.866h42.382c41.455 0 75.183-33.727 75.183-75.183.005-28.542-16.249-54.275-40.944-66.935zM107.666 221.101c0-19.915 7.755-38.637 21.838-52.718 14.081-14.083 32.804-21.838 52.718-21.838s38.637 7.755 52.718 21.838c15.905 15.903 23.602 37.965 21.482 59.925l-.136-.024a103.5 103.5 0 00-4.183-.739l-.15-.024-.115-.018c-.089-.014-.18-.024-.27-.036a104.328 104.328 0 00-4.748-.6l-.135-.012c-.008-.001-.015-.003-.024-.003-.112-.011-.225-.017-.337-.028-1.396-.136-2.798-.24-4.204-.32-.105-.007-.211-.017-.318-.022-.136-.007-.269-.022-.405-.029h-.007c-.173-.008-.348-.006-.523-.014a107.534 107.534 0 00-4.827-.122c-1.792 0-3.575.047-5.351.136-.255.012-.506.042-.76.055-1.538.087-3.073.197-4.597.351l-.146.018c-23.95 2.443-46.153 12.946-63.408 30.201a105.485 105.485 0 00-15.548 19.797c-1.07 1.762-2.124 3.644-3.318 5.929-.219.419-.435.84-.649 1.265A74.697 74.697 0 01129.5 273.82c-14.078-14.082-21.834-32.804-21.834-52.719z"
          ></path>
        </svg>
      );

    case "weatherSnowy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          version="1.1"
          viewBox="0 0 512.002 512.002"
          xmlSpace="preserve"
        >
          <path
            fill="#ffffff"
            d="M461.809 183.947c4.537-13.926 6.828-28.429 6.828-43.299C468.637 63.288 405.701.351 328.34.351c-46.791 0-90.137 23.266-116.109 61.527a126.374 126.374 0 00-9.998-2.49c-.262-.054-.525-.105-.786-.157-1.747-.35-3.502-.666-5.263-.942-.252-.04-.501-.084-.753-.122a127.626 127.626 0 00-5.932-.756c-.228-.024-.458-.038-.686-.06a130.206 130.206 0 00-5.128-.392 128.365 128.365 0 00-7.331-.227c-63.502 0-116.274 46.819-125.611 107.752a127.654 127.654 0 00-1.464 19.917C19.382 199.757 0 230.833 0 265.075c0 49.995 40.674 90.668 90.668 90.668h54.357c8.755 0 15.852-7.097 15.852-15.852s-7.097-15.852-15.852-15.852H90.668c-32.513 0-58.964-26.451-58.964-58.964 0-24.913 15.773-47.249 39.25-55.576a15.854 15.854 0 0010.48-16.453 97.322 97.322 0 01-.455-9.234c0-52.59 42.785-95.375 95.375-95.375 1.625 0 3.24.043 4.844.124.312.016.623.049.935.068 1.303.078 2.603.166 3.892.296.25.025.499.065.75.092 1.349.147 2.695.311 4.026.514.176.027.35.063.528.092 1.4.222 2.795.464 4.174.747.133.027.265.062.396.089a95.36 95.36 0 014.22.976c.109.029.219.062.328.092 1.412.369 2.815.764 4.202 1.197.087.027.171.059.258.086 1.414.445 2.817.916 4.202 1.425l.022.008c36.492 13.397 62.595 48.492 62.595 89.571 0 8.755 7.097 15.852 15.852 15.852 8.755 0 15.852-7.097 15.852-15.852 0-46.119-24.699-86.572-61.56-108.843 20.368-26.797 52.223-42.912 86.467-42.912 59.877 0 108.592 48.714 108.592 108.592 0 15.903-3.384 31.259-10.057 45.64a15.852 15.852 0 0010.167 21.955c25.467 7.021 43.254 30.39 43.254 56.832 0 32.513-26.451 58.964-58.964 58.964h-51.715c-8.755 0-15.852 7.097-15.852 15.852 0 8.755 7.097 15.852 15.852 15.852h51.715c49.995 0 90.668-40.674 90.668-90.668.003-34.73-19.955-66.013-50.188-81.131z"
          ></path>
          <path
            fill="#ffffff"
            d="M256 438.682c-39.917 0-72.392-32.475-72.392-72.392s32.475-72.392 72.392-72.392 72.392 32.475 72.392 72.392-32.476 72.392-72.392 72.392zm0-113.078c-22.434 0-40.688 18.252-40.688 40.688S233.564 406.98 256 406.98s40.688-18.252 40.688-40.688c0-22.436-18.254-40.688-40.688-40.688z"
          ></path>
          <path
            fill="#ffffff"
            d="M387.954 511.65c-30.817 0-55.888-25.072-55.888-55.888s25.072-55.887 55.888-55.887 55.887 25.07 55.887 55.887-25.071 55.888-55.887 55.888zm0-80.071c-13.335 0-24.184 10.849-24.184 24.183 0 13.335 10.849 24.184 24.184 24.184s24.182-10.849 24.182-24.184c.002-13.334-10.848-24.183-24.182-24.183z"
          ></path>
          <path
            fill="#ffffff"
            d="M124.045 511.65c-30.817 0-55.887-25.072-55.887-55.888s25.07-55.887 55.887-55.887 55.888 25.07 55.888 55.887-25.071 55.888-55.888 55.888zm0-80.071c-13.335 0-24.182 10.849-24.182 24.183 0 13.335 10.849 24.184 24.182 24.184 13.335 0 24.184-10.849 24.184-24.184 0-13.334-10.849-24.183-24.184-24.183z"
          ></path>
        </svg>
      );

    case "weatherRainy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          version="1.1"
          viewBox="0 0 511.998 511.998"
          xmlSpace="preserve"
        >
          <g fill="#ffffff">
            <path d="M190.579 499.535a15.854 15.854 0 01-15.373-19.694l26.3-105.249H181.22a15.851 15.851 0 01-13.573-24.043l55.104-91.322a15.854 15.854 0 0113.574-7.661h93.758a15.853 15.853 0 0112.953 24.991l-22.933 32.508h10.683a15.852 15.852 0 0111.883 26.344L202.471 494.177a15.863 15.863 0 01-11.892 5.358zm18.72-156.649h12.507c4.881 0 9.489 2.248 12.495 6.095a15.855 15.855 0 012.885 13.6l-15.467 61.893 73.917-83.708h-6.119a15.853 15.853 0 01-12.953-24.991l22.933-32.508h-54.226l-35.972 59.619z"></path>
            <path d="M461.81 196.06c4.535-13.926 6.828-28.428 6.828-43.299 0-77.36-62.937-140.297-140.297-140.297-46.791 0-90.137 23.266-116.108 61.526a125.93 125.93 0 00-10.015-2.494c-.246-.051-.495-.098-.74-.147a125.197 125.197 0 00-5.315-.951c-.239-.038-.479-.081-.718-.116a127.01 127.01 0 00-5.949-.758c-.22-.022-.442-.038-.663-.059-1.71-.166-3.426-.295-5.147-.393a128.365 128.365 0 00-7.328-.227c-70.072 0-127.079 57.008-127.079 127.079 0 .197 0 .393.002.59C19.383 211.871 0 242.944 0 277.186c0 49.995 40.672 90.668 90.667 90.668h22.632c8.754 0 15.852-7.097 15.852-15.852s-7.099-15.852-15.852-15.852H90.667c-32.513 0-58.962-26.451-58.962-58.964 0-24.913 15.773-47.249 39.25-55.578a15.85 15.85 0 0010.478-16.451 97.689 97.689 0 01-.453-9.234c0-52.59 42.785-95.375 95.375-95.375 1.625 0 3.239.043 4.844.124.311.016.618.049.927.068a92.93 92.93 0 013.901.298c.241.024.479.062.72.089 1.36.147 2.715.312 4.058.517.163.025.323.059.485.084 1.416.224 2.823.469 4.218.755.114.024.228.054.342.078 1.436.3 2.863.626 4.275.989.09.024.178.051.268.075 1.433.374 2.857.775 4.263 1.213.067.021.133.046.2.067 38.71 12.149 66.871 48.356 66.871 91.02 0 8.755 7.099 15.852 15.852 15.852s15.852-7.097 15.852-15.852c0-46.119-24.699-86.572-61.561-108.843 20.367-26.797 52.222-42.912 86.468-42.912 59.877 0 108.592 48.714 108.592 108.592 0 15.906-3.384 31.261-10.057 45.639a15.852 15.852 0 0010.165 21.955c25.467 7.021 43.254 30.39 43.254 56.832 0 32.513-26.453 58.964-58.964 58.964h-35.851c-8.754 0-15.852 7.097-15.852 15.852s7.099 15.852 15.852 15.852h35.851c49.995 0 90.668-40.674 90.668-90.668.004-34.729-19.952-66.012-50.186-81.128zM323.339 453.008a15.792 15.792 0 01-10.486-3.969c-6.563-5.796-7.184-15.813-1.39-22.375l28.293-32.041c5.794-6.563 15.813-7.187 22.375-1.39 6.563 5.796 7.184 15.813 1.39 22.375l-28.293 32.041a15.811 15.811 0 01-11.889 5.359zM104.907 453.008c-3.73 0-7.473-1.308-10.486-3.969-6.563-5.794-7.184-15.813-1.39-22.375l28.295-32.041c5.796-6.561 15.816-7.184 22.375-1.389 6.563 5.794 7.184 15.813 1.39 22.375l-28.295 32.041a15.822 15.822 0 01-11.889 5.358z"></path>
          </g>
        </svg>
      );

    case "weatherCloudy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          version="1.1"
          viewBox="0 0 511.996 511.996"
          xmlSpace="preserve"
        >
          <path
            fill="#ffffff"
            d="M324.58 456.864H155.951c-42.847 0-77.707-34.859-77.707-77.707 0-8.135 6.595-14.73 14.73-14.73s14.73 6.595 14.73 14.73c0 26.605 21.644 48.247 48.247 48.247H324.58c8.135 0 14.73 6.594 14.73 14.73s-6.595 14.73-14.73 14.73z"
          ></path>
          <path
            fill="#ffffff"
            d="M470.045 310.168c3.624-11.514 5.454-23.484 5.454-35.748 0-65.883-53.6-119.483-119.483-119.483-.533 0-1.063.018-1.595.025-3.884-55.696-50.407-99.831-107.072-99.831-35.092 0-67.654 17.098-87.648 45.341a97.272 97.272 0 00-25.493-3.372c-53.333 0-96.805 43.031-97.518 96.2C14.369 205.495 0 229.132 0 255.12c0 38.832 31.592 70.423 70.423 70.423h50.906c2.438 5.768 8.399 9.552 14.973 8.917 8.098-.776 14.033-7.97 13.257-16.069a80.187 80.187 0 01-.374-7.571v-.009l-.001-.106c0-.729.035-1.449.055-2.174.018-.638.019-1.28.053-1.915.037-.7.105-1.39.159-2.086.05-.638.084-1.28.15-1.913.069-.679.171-1.349.258-2.024.082-.639.15-1.284.249-1.918.102-.657.233-1.304.351-1.956.115-.641.217-1.286.348-1.922.131-.639.293-1.267.439-1.9.149-.638.283-1.28.446-1.912.162-.628.354-1.243.53-1.863.178-.625.343-1.255.536-1.872.19-.61.408-1.206.613-1.809.211-.619.407-1.242.632-1.853.214-.579.452-1.146.679-1.719.245-.62.477-1.246.738-1.859.239-.563.504-1.111.754-1.666.275-.608.539-1.224.829-1.824.267-.551.557-1.086.835-1.629.302-.589.594-1.187.91-1.768.287-.527.6-1.04.897-1.56.334-.582.658-1.171 1.006-1.743.303-.498.63-.981.944-1.471.368-.576.728-1.159 1.111-1.726.326-.48.673-.944 1.009-1.417.396-.558.784-1.125 1.193-1.673.343-.458.707-.897 1.059-1.346.427-.545.845-1.099 1.286-1.632.368-.445.757-.872 1.134-1.309.448-.517.885-1.043 1.345-1.55.396-.436.813-.851 1.218-1.277.464-.488.919-.985 1.396-1.461.407-.407.834-.794 1.249-1.192.496-.474.984-.959 1.492-1.42.414-.376.847-.732 1.27-1.1.53-.461 1.052-.932 1.594-1.379.442-.365.903-.709 1.352-1.063.541-.427 1.074-.863 1.625-1.276.489-.365.994-.707 1.492-1.062.533-.38 1.058-.77 1.601-1.137.492-.331 1-.641 1.499-.962.567-.365 1.127-.739 1.703-1.09.495-.3 1.005-.577 1.507-.868.598-.345 1.187-.701 1.794-1.031.538-.292 1.091-.56 1.636-.84.586-.302 1.167-.616 1.762-.903.552-.267 1.119-.507 1.679-.762.604-.274 1.202-.561 1.813-.82.567-.24 1.149-.454 1.722-.681.619-.245 1.23-.502 1.854-.732.627-.23 1.27-.432 1.905-.647.586-.197 1.164-.409 1.756-.595.651-.203 1.315-.376 1.972-.561.589-.166 1.173-.349 1.768-.502.682-.175 1.376-.32 2.064-.477.583-.134 1.159-.283 1.747-.404.681-.14 1.373-.247 2.061-.368.607-.108 1.208-.231 1.821-.326.717-.109 1.445-.186 2.168-.277.591-.074 1.177-.165 1.772-.225.869-.088 1.747-.14 2.625-.2.46-.031.913-.081 1.374-.105a80.056 80.056 0 018.059-.001c.258.013.513.041.769.056 1.08.065 2.158.138 3.226.246.202.021.401.052.601.074 1.124.122 2.243.258 3.351.427.137.021.271.049.408.071 1.17.184 2.333.387 3.485.625.091.018.18.043.271.06 1.193.249 2.377.52 3.55.822l.205.057c1.193.311 2.376.645 3.547 1.01l.124.041c32.04 10.038 55.354 40 55.354 75.307 0 8.135 6.595 14.73 14.73 14.73 8.135 0 14.73-6.595 14.73-14.73 0-38.761-20.471-72.815-51.156-91.97 12.791-16.178 30.935-27.698 51.108-32.211.227-.05.452-.103.679-.152a87.702 87.702 0 014.568-.86 90.054 90.054 0 0114.382-1.164c49.639 0 90.024 40.385 90.024 90.024 0 13.185-2.805 25.914-8.337 37.835a14.727 14.727 0 009.446 20.399c20.838 5.746 35.393 24.868 35.393 46.502 0 26.605-21.644 48.247-48.247 48.247h-28.792c-8.135 0-14.73 6.595-14.73 14.73 0 8.135 6.594 14.73 14.73 14.73h28.792c42.847 0 77.707-34.859 77.707-77.707 0-29.347-16.64-55.831-41.955-68.983zM29.459 255.12c0-17.309 10.957-32.825 27.268-38.611a14.73 14.73 0 009.738-15.288 69.535 69.535 0 01-.324-6.593c0-37.533 30.535-68.068 68.068-68.068 9.044 0 17.833 1.75 26.126 5.201a14.728 14.728 0 0018.587-6.539c13.687-25.063 39.907-40.632 68.426-40.632 41.784 0 75.989 33.062 77.829 74.4l-.156.046a119.526 119.526 0 00-67.318 47.468c-.767-.218-1.541-.414-2.313-.614-.137-.035-.271-.074-.408-.108-.15-.038-.299-.082-.451-.119-.144-.037-.286-.078-.43-.115a99.143 99.143 0 00-2.796-.639c-.284-.062-.566-.134-.848-.194-.183-.038-.367-.069-.549-.106a105.444 105.444 0 00-2.106-.405c-.339-.062-.676-.136-1.015-.194-.599-.105-1.202-.189-1.803-.283-.252-.04-.504-.081-.757-.118-.38-.057-.757-.125-1.137-.178-.76-.106-1.526-.187-2.289-.277-.477-.056-.952-.124-1.43-.172l-.227-.019h-.007c-.672-.068-1.346-.118-2.019-.174-.496-.041-.991-.094-1.491-.128-.458-.031-.918-.046-1.377-.071a92.406 92.406 0 00-1.181-.06c-.14-.006-.278-.016-.418-.022-.264-.01-.524-.031-.788-.04-1.258-.043-2.52-.065-3.784-.065-1.794 0-3.576.049-5.348.135-.589.029-1.17.085-1.757.122-1.178.077-2.357.155-3.526.27-.692.068-1.377.161-2.065.242-1.055.124-2.108.247-3.152.402-.723.106-1.439.233-2.158.354-.997.168-1.993.339-2.981.535a97.4 97.4 0 00-2.187.463c-.96.211-1.919.429-2.871.664-.729.181-1.454.371-2.177.567a107.289 107.289 0 00-7.7 2.394c-.689.243-1.38.486-2.064.742-.925.348-1.84.716-2.753 1.087-.657.268-1.315.529-1.966.81-.941.405-1.868.835-2.794 1.265-.602.28-1.211.551-1.807.841-1.01.492-2.005 1.015-2.998 1.538-.493.261-.996.505-1.485.773a108.264 108.264 0 00-4.328 2.491l-.028.016c-1.43.871-2.837 1.776-4.224 2.71-.457.308-.897.633-1.349.949-.921.641-1.84 1.281-2.74 1.95-.527.392-1.04.801-1.561 1.202-.803.619-1.604 1.237-2.388 1.878-.542.442-1.069.899-1.603 1.351a107.76 107.76 0 00-2.201 1.908c-.535.479-1.059.968-1.585 1.458-.697.65-1.389 1.305-2.068 1.972a111.656 111.656 0 00-3.499 3.601 111.79 111.79 0 00-1.467 1.608c-.635.71-1.256 1.433-1.872 2.159-.464.548-.928 1.096-1.382 1.654-.613.754-1.209 1.522-1.801 2.292-.426.554-.857 1.105-1.273 1.666-.602.815-1.181 1.644-1.762 2.476-.377.541-.763 1.074-1.13 1.622-.625.929-1.22 1.88-1.816 2.83-.293.468-.6.926-.887 1.399a108.274 108.274 0 00-2.463 4.279c-.015.028-.031.053-.047.081a107.766 107.766 0 00-2.302 4.49c-.237.488-.452.988-.681 1.48a107.172 107.172 0 00-1.414 3.124c-.259.605-.496 1.221-.745 1.832-.39.959-.778 1.916-1.14 2.888-.246.66-.474 1.329-.709 1.994-.33.941-.657 1.882-.962 2.835-.222.694-.43 1.395-.639 2.096-.28.941-.552 1.884-.807 2.835a109.708 109.708 0 00-1.218 5.036c-.159.731-.312 1.464-.457 2.201-.19.977-.362 1.958-.527 2.943-.122.734-.245 1.467-.352 2.205-.047.327-.11.647-.156.975H70.423c-22.587-.01-40.964-18.385-40.964-40.973z"
          ></path>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
