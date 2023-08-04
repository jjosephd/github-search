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

import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
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
  {
    /* For reducer: setting initial state to an object with an empty array (users) and true (loading).
    InitialState is replacing state with this object */
  }
  const intialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  {
    /* fetchUsers is an async function that awaits for fetching of Github API user endpoint  
    Test results of fetch users*/
  }

  const searchUsers = async (text) => {
    setLoading();

    //params takes new URL search param with query being text state

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    {
      /*dispatch type GET USERS and data is sent as a payload */
    }
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();

    //params takes new URL search param with query being text state

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const result = await response.json();

      {
        /*dispatch type GET USERS and data is sent as a payload */
      }
      dispatch({
        type: 'GET_USER',
        payload: result,
      });
    }
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const clearUsers = (users) => {
    dispatch({
      type: 'CLEAR_USERS',
      payload: users,
    });

    console.log('users cleared');
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
