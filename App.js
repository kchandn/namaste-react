var heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Hi, I am h1"),
    React.createElement("h2", { id: "h2" }, "Hi, I am h2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "Hi, I am h1"),
    React.createElement("h2", { id: "h2" }, "Hi, I am h2"),
  ]),
]);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
