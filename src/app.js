console.log("App.js is running!");

const app = {
  title: "some title",
  subtitle: "subtitle",
  options: ["one", "two"],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: "Giedre",
  age: 31,
  location: "Vilnius",
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const jsx = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
//ReactDOM.render(jsx, appRoot);
ReactDOM.render(template, appRoot);
