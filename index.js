const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="title">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box text="Small" className="small-container" />>
      <Box text="Medium" className="medium-container" />>
      <Box text="Large" className="large-container" />>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
