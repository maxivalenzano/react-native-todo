import React, { createContext } from "react";

const Store = createContext({
  todos: [],
  id: 1,
});

export default Store;
