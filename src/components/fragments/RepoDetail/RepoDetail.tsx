import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Error from '@components/Error'
import Loading from '@components/Loading'
import NoResult from '@components/NoResult'

import BackButtonIcon from '@material-ui/icons/ArrowBack'

import { API_GITHUB_REPO_DETAIL_URL } from '@constants'

import {
  RepoDetailContainer,
  BackButtonContainer,
  RepoInfoContainer,
  Row,
  Label,
  ExternalLink,
} from './RepoDetail.styled'
import { fetchRepoDetail, reseRepoDetail, selectRepoDetail } from '@redux-reducers/repo-detail'
import { useHistory, useParams } from 'react-router'
import Text from '@components/Text'
import { color } from '@helpers/styles'
import { getFormattedDateTime } from '@helpers/methods'

interface ParamTypes {
  user: string,
  repo: string
}

const RepoDetail = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const repoDetail = useSelector(selectRepoDetail)
  const { user, repo } = useParams<ParamTypes>()

  useEffect(() => {
    const api_url = API_GITHUB_REPO_DETAIL_URL.replace("%1", user)
                                              .replace("%2", repo)
    dispatch(fetchRepoDetail(api_url))
  }, [user, repo, dispatch])

  const renderData = () => {
    return (
      <RepoInfoContainer>
        <Row>
          <Label>
            <Text text="Repo Name: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={repoDetail.data?.name} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Repo URL: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <ExternalLink href={repoDetail.data?.html_url ?? ''}>
            <Text text={repoDetail.data?.html_url} textSize="heading-4" textColor={color.text.light} />
          </ExternalLink>
        </Row>
        <Row>
          <Label>
            <Text text="Owner: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <ExternalLink href={repoDetail.data?.owner.html_url ?? ''}>
            <Text text={repoDetail.data?.owner.login} textSize="heading-4" textColor={color.text.light} />
          </ExternalLink>
        </Row>
        <Row>
          <Label>
            <Text text="Description: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={repoDetail.data?.description} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Created: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={getFormattedDateTime(new Date(repoDetail.data?.created_at ?? ''))} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Last updated: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={getFormattedDateTime(new Date(repoDetail.data?.updated_at ?? ''))} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Size: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={(repoDetail.data?.size ?? 0).toString()} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Language: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={repoDetail.data?.language} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Stars: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={(repoDetail.data?.stargazers_count ?? 0).toString()} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Forks: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={(repoDetail.data?.forks_count ?? 0).toString()} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Watchers: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={(repoDetail.data?.watchers_count ?? 0).toString()} textSize="heading-4" textColor={color.text.light} />
        </Row>
        <Row>
          <Label>
            <Text text="Open Issues: " textSize="heading-4" textColor={color.text.primary} />
          </Label>
          <Text text={(repoDetail.data?.open_issues_count ?? 0).toString()} textSize="heading-4" textColor={color.text.light} />
        </Row>
      </RepoInfoContainer>
    )
  }

  const renderChild = () => {
    if (repoDetail.status === 'loading') return <Loading />
    if (repoDetail.error) return <Error />
    if (repoDetail.data === null) return <NoResult />
    return renderData()
  }

  const onClickBack = () => {
    history.push('/')
    dispatch(reseRepoDetail())
  }

  return (
    <RepoDetailContainer>
      <BackButtonContainer>
        <BackButtonIcon onClick={onClickBack} />
      </BackButtonContainer>
      {renderChild()}
    </RepoDetailContainer>
  )
}

export default memo(RepoDetail)
