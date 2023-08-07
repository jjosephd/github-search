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
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'


const RepoList = ({repos}) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Recent Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo}/>
        ))}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
