import { useEffect, useState } from 'react'
import { FaGithub, FaBuilding, FaUserGroup } from 'react-icons/fa6'

import { ExternalLink } from '../ExternalLink'

import { ProfileContainer, ProfileInfo, ProfileResume } from './styles'
import { api } from '../../services/axios';

interface UserState {
  id: number,
  avatar_url: string;
  name: string;
  company: string,
  email: string,
  bio: string,
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserState>({} as UserState);

  useEffect(() => {
    async function getUser() {
      const { data } = await api.get<UserState>(`/users/Fekleite`)

      setUser(data);
    }

    getUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt={user.name} />

      <ProfileInfo>
        <header>
          <span>{user.name}</span>

          <ExternalLink url={user.html_url} text="github" />
        </header>

        <p>{user.bio}</p>

        <ProfileResume>
          <div>
            <FaGithub />
            <span>Fekleite</span>
          </div>

          <div>
            <FaBuilding />
            <span>{user.company}</span>
          </div>

          <div>
            <FaUserGroup />
            <span>{user.followers} seguidores</span>
          </div>
        </ProfileResume>
      </ProfileInfo>
    </ProfileContainer>
  )
}