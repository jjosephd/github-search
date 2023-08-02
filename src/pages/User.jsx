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
import * as React from 'react'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useContext } from "react"
import GithubContext from "../context/github/GithubContext"
import Spinner from "../components/layout/spinner"

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext)
  
  const params = useParams()
  
  useEffect(() => {
    getUser(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) {
    return <Spinner/>
  }

  return (
    <React.Fragment>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to='/' className='btn bg-transparent font-semibold btn-outline hover:border-transparent rounded'>Return To Search</Link>
        </div>

        <div className="grid grid-ols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end gap-0">
                <h2 className='card-title mb-0'>{name}</h2>
                <p>{login }</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge badge-info">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href="{html_url}" target='_blank' rel='noreferrer' className='btn btn-outline'>Visit Github Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
  )
}

export default User
