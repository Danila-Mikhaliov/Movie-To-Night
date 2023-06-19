const ArrowLeft = ({
  callback = () => {},
  width = 20,
  height = 20,
  fill = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L6.41421 16L14.7071 24.2929C15.0976 24.6834 15.0976 25.3166 14.7071 25.7071C14.3166 26.0976 13.6834 26.0976 13.2929 25.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289Z"
        fill="white"
      />
    </svg>
  );
};
export default ArrowLeft;
