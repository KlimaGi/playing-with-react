let visibility = false;

const toggleShow = () => {
  visibility = !visibility;
  renderToggle();
};

const renderToggle = () => {
  const templateText = (
    <div>
      <h1>Title</h1>
      <button onClick={toggleShow}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Every step matter. With the time value. Step by step.</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(templateText, document.getElementById("app"));
};

renderToggle();
