import React, { useState } from "react";

import List from "./Pages/List";

import Data from "./Pages/Data";

const App = () => {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <main>
        <section>
          <div className="container">
            <h3> {people.length} BirthDay Today</h3>
            <List people={people} />
            <button onClick={() => setPeople([])}>Clear all</button>
          </div>
        </section>
      </main>
    </>
  );
};
export default App;
