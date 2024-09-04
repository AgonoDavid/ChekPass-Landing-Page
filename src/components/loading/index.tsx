import Logo from "../../assets/logo.png";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={Logo}
        className="object-contain w-[10%] ssm:w-[30%]"
        alt="logo"
      />
    </div>
  );
};

export default Loading;
