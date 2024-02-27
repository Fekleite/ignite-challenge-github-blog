import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";

import { Container, TitleGroup, PostList } from "./styles";

export function Blog() {
  return (
    <div>
      <Header />

      <Container>
        <Profile />

        <main>
          <TitleGroup>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </TitleGroup>

          <form>
            <input type="text" name="search" placeholder="Buscar conteúdo" />
          </form>

          <PostList>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </PostList>
        </main>
      </Container>
    </div>
  )
}
