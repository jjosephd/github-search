// Copyright 2023 YOUR NAME HERE
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Github context created to provide variables for UserResults
 */

import { createContext, useState } from 'react';

const GithubContext = createContext();

/**
 * URL & Access Token. *Access token may need to be regenerated
 */

const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = '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';

/***
 * Github Provider that takes children (React Nodes) as props
 */

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  {
    /* fetchUsers is an async function that awaits for fetching of Github API user endpoint */
  }

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
