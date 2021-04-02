import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, screenMax, spaceDt, spaceMb } from '@helpers/styles'

const RepoDetailContainer = styled.div`
  height: 100%;

  ${screenMax('lg')} {
    overflow-x: hidden;
    overflow-y: auto;
  }
`

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: ${toVW(50, 'desktop')};
  color: ${color.bg.secondary};
  cursor: pointer;

  ${screenMax('lg')} {
    height: ${toVW(50, 'mobile')};
  }
`

const RepoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${toVW(60, 'desktop')} - ${spaceDt(2)});

  ${screenMax('lg')} {
    flex-direction: column;
    height: calc(100% - ${toVW(50, 'mobile')} - ${spaceMb(1)});
    padding-left: ${spaceMb(2)};
    padding-right: ${spaceMb(2)};
  }
`

const Label = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: end;
  width: ${toVW(150, 'desktop')};
  margin-right: ${spaceDt(2)};

  ${screenMax('lg')} {
    width: ${toVW(100, 'mobile')};
    margin-right: ${spaceMb(1)};
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${spaceDt(1)};
  width: 100%;

  ${screenMax('lg')} {
    margin-bottom: ${spaceMb(1)};
  }
`

const Field = styled.div`
  width: calc(100% - ${toVW(166, 'desktop')});

  ${screenMax('lg')} {
    width: calc(100% - ${toVW(108, 'mobile')});
  }
`

const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export {
  RepoDetailContainer,
  BackButtonContainer,
  RepoInfoContainer,
  Label,
  Row,
  ExternalLink,
  Field,
}
