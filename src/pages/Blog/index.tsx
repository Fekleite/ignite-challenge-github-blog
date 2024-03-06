import { ChangeEvent, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";

import { Container, TitleGroup, PostList } from "./styles";
import { api } from "../../services/axios";

interface IssueState {
  total_count: number,
  items: Array<{
    id: number,
    title: string,
    body: string,
    created_at: string,
  }>
}

export function Blog() {
  const [searchText, setSearchText] = useState('')
  const [issues, setIssues] = useState<IssueState>({} as IssueState)

  async function searchIssue() {
    const { data } = await api.get<IssueState>(`/search/issues`, {
      params: {
        q: ` ${searchText} repo:Fekleite/ignite-challenge-github-blog`
      },
    })

    setIssues(data)
  }

  useEffect(() => {
    searchIssue()
  }, [searchText]);

  function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <Header />

      <Container>
        <Profile />

        <main>
          <TitleGroup>
            <h2>Publicações</h2>
            <span>{issues.total_count || 0} publicações</span>
          </TitleGroup>

          <form>
            <input type="text" placeholder="Buscar conteúdo" onChange={handleOnChangeInput} />
          </form>

          <PostList>
            {issues?.items?.map(issue => (
              <PostCard
                key={issue.id}
                {...issue}
              />
            ))}
          </PostList>
        </main>
      </Container>
    </div>
  )
}
