import { memo } from 'react'

import { INTERFACE_REPO_INFO } from '@helpers/types'
import StarIcon from '@material-ui/icons/Star'
import ForkIcon from '@material-ui/icons/CallSplit'
import WatchIcon from '@material-ui/icons/Visibility'

import {
  RepoCardContainer,
  RepoName,
  RepoDescription,
  InfoPane,
  CountPane,
  LargeField,
  LargeFieldText,
  Language,
  LanguageText
} from './RepoCard.styled'

const RepoCard = ({ repo }: { repo: INTERFACE_REPO_INFO}) => {
  const renderLargeField = (icon: React.ReactNode, text: React.ReactNode) => (
    <LargeField>{icon}<LargeFieldText>{text}</LargeFieldText></LargeField>
  )

  return (
    <RepoCardContainer>
      <InfoPane>
        <RepoName to={`/repos/${repo.name}`}>{repo.name}</RepoName>
        <RepoDescription>{repo.description}</RepoDescription>
      </InfoPane>
      <CountPane>
        {renderLargeField(
          <StarIcon />,
          `${repo.stargazers_count}`
        )}
        {renderLargeField(
          <ForkIcon />,
          `${repo.forks_count}`
        )}
        {renderLargeField(
          <WatchIcon />,
          `${repo.watchers_count}`
        )}
        <Language>
          {renderLargeField(
            null,
            <LanguageText>{repo.language}</LanguageText>
          )}
        </Language>
      </CountPane>
    </RepoCardContainer>
  )
}

export default memo(RepoCard)
