const Button = (props) => {
  //   props = {
  //     transmission: setSwtich1,
  //   };
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          //   setSwitch1(true);
          props.transmission(true);
        }}
      >
        ON
      </button>
      <button
        onClick={() => {
          //   setSwitch1(false);
          props.transmission(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};
export default Button;
