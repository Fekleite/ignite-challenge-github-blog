import { ChangeEvent } from "react";
import { useContextSelector } from "use-context-selector";

import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";

import { Container, TitleGroup, PostList } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";


export function Blog() {
  const { issues, searchIssues } = useContextSelector(IssuesContext, (context) => {
    return {
      issues: context.issues,
      searchIssues: context.searchIssues
    }
  })

  async function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    searchIssues(event.target.value);
  }

  return (
    <div>
      <Header />

      <Container>
        <Profile />

        <main>
          <TitleGroup>
            <h2>Publicações</h2>
            <span>{issues.length} publicações</span>
          </TitleGroup>

          <form>
            <input type="text" placeholder="Buscar conteúdo" onChange={handleOnChangeInput} />
          </form>

          <PostList>
            {issues?.map(issue => (
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
