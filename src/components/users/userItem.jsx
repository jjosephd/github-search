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
import { Card, CardContent } from '@mui/material'
import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


const UserItem = ({user: {login, avatar_url}}) => {
  return (
    <Card sx={{
      maxWidth: 345,
      backgroundColor: '#2a303c'}}>
      <CardContent sx={{  display: 'flex', flexDirection: 'row' }}>
        <Avatar src={avatar_url} alt='Profile' />
        <Container maxWidth='sm' sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="" gutterBottom sx={{
            fontWeight: 600,
          color: 'white'}}>
            {login}
          </Typography>
          <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
            View Profile
          </Link>
          </Container>
        </CardContent>
    </Card>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
