import { FaArrowUpRightFromSquare, FaGithub, FaBuilding, FaUserGroup } from 'react-icons/fa6'
import { ProfileContainer, ProfileInfo, ProfileResume } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="" alt="" />

      <ProfileInfo>
        <header>
          <span>Cameron Williamson</span>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            GITHUB

            <FaArrowUpRightFromSquare />
          </a>
        </header>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <ProfileResume>
          <div>
            <FaGithub />
            <span>cameronwll</span>
          </div>

          <div>
            <FaBuilding />
            <span>Rocketseat</span>
          </div>

          <div>
            <FaUserGroup />
            <span>32 seguidores</span>
          </div>
        </ProfileResume>
      </ProfileInfo>
    </ProfileContainer>
  )
}