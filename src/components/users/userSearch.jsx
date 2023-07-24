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
import { useState,useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

const UserSearch = () => {
  const [text, setText] = useState('')

  const {users} = useContext(GithubContext)

  const handleChange = (e) => setText(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (text === '') {
      alert('Please enter text')
    } else {
      //@todo - search users
      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl: grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}/>
              <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
        {/*Display only if items in users state */}
      {users.length > 0 && (<div>
        <button className="btn btn-ghost btn-lg">Clear</button>
      </div>)}
        
    </div>
  )
}

export default UserSearch
