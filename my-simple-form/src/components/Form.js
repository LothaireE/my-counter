const Form = ([username, setUsername]) => {
  console.log("=======>", setUsername);
  return (
    <div>

      <form onSubmit={
          
      }>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            console.log(event.target.value);
            username = event.target.value;
          }}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
