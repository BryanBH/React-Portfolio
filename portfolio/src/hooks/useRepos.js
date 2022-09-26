import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/BryanBH/repos")
      .then((res) => {
        setRepos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return repos;
}
