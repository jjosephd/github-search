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
import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'


const RepoItem = ({ repo }) => {
  
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo


  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href="{html_url}">
            <FaLink className='inline mr-1'/> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className='mr-2'/> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className='mr-2'/> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className='mr-2'/> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <BsFillGearFill className='mr-2'/> {forks}
          </div>
          
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
