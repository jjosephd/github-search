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
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {

  const {alert} = useContext(AlertContext)

  return alert !== null && (
    <div
    className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
    style={{ visibility: alert ? 'visible' : 'hidden' }}
  >
    <div className='alert alert-error'>
      <div>
        <svg
          fill='none'
          viewBox='0 0 24 24'
          className='w-6 h-6 stroke-current mr-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
          ></path>
        </svg>
        <strong>{alert.msg}</strong>
      </div>
    </div>
  </div>
    
  )
}

export default Alert
