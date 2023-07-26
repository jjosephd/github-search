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
import { useEffect, useContext } from "react"
import GithubContext from "../context/github/GithubContext"
import { useParams } from "react-router-dom"

const User = () => {
  const { getUser, user } = useContext(GithubContext)
  
  const params = useParams()
  
  useEffect(() => {
    getUser(params.login)
  }, [])

  return (
    <div>
      {user.login}
    </div>
  )
}

export default User