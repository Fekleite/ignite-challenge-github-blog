import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";

import { Container, TitleGroup } from "./styles";

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
        </main>
      </Container>
    </div>
  )
}
