import { ThreeDots } from "react-loader-spinner";

const LoaderSpinier = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#995f45"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        // minHeight: "100vh",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // margin: "0 auto",
        // minWidth: "100vh",
        marginTop: "50vh",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default LoaderSpinier;
