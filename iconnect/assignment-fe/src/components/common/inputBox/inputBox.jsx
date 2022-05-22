export default function InputBox({type, id, placeholder, value, errorMessage, changeEvent}){
  const addValue = (event) => {
    changeEvent(event.target.value, event.target.name);
  };
  return (
    <div className="form-group" style={{width:'100%'}}>
      <label htmlFor={id}>
        <i className="zmdi zmdi-account material-icons-name"></i>
      </label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={addValue}
      />
    </div>
  );
}