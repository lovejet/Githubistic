import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_GITHUB_REPO_SEARCH_URL } from "@constants";

import { selectSearchQuery } from "@redux-reducers/search-query";
import {
  fetchRepos,
  reseRepoList,
  selectRepoList,
} from "@redux-reducers/repo-list";

import Error from "@components/Error";
import Loading from "@components/Loading";
import NoResult from "@components/NoResult";
import RepoCard from "@components/RepoCard";

import {
  RepoListContainer,
  TotalUserCount,
  ListContainer,
} from "./RepoList.styled";

const RepoList = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const repoList = useSelector(selectRepoList);

  const renderList = () => {
    return (
      <ListContainer>
        {repoList.data.map((repo) => (
          <RepoCard key={repo.node_id} repo={repo} />
        ))}
      </ListContainer>
    );
  };

  const renderChild = () => {
    if (repoList.status === "loading") return <Loading />;
    if (repoList.error) return <Error />;
    if (repoList.data.length === 0) return <NoResult />;
    return renderList();
  };

  useEffect(() => {
    if (searchQuery.q !== "") {
      const api_url = API_GITHUB_REPO_SEARCH_URL.replace(
        "%1",
        searchQuery.q +
          (searchQuery.filterOptions.index === 0
            ? ""
            : `+language:${searchQuery.filterOptions.key}`)
      )
        .replace("%2", searchQuery.currentPage.toString())
        .replace("%3", searchQuery.itemsPerPage.toString())
        .replace("%4", searchQuery.sortOptions.o)
        .replace("%5", searchQuery.sortOptions.s);

      dispatch(fetchRepos(api_url));
    } else {
      dispatch(reseRepoList());
    }
  }, [dispatch, searchQuery]);

  return (
    <RepoListContainer>
      <TotalUserCount active={repoList.total !== 0}>
        {repoList.total} repo{repoList.total >= 2 ? "s" : ""} found.
      </TotalUserCount>
      {renderChild()}
    </RepoListContainer>
  );
};

export default memo(RepoList);
