// @flow
import React from "react";

// This does not generate an error
// import foo from "../services/foo";
// This successfully produces an error
import foo from "../services/foo/foo.service";

const App = (props: {}): mixed => {
  console.log(foo("alpha", "bravo"));

  return <div>Example</div>;
};

export default App;
