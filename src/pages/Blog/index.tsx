import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";

import { Container } from "./styles";

export function Blog() {
  return (
    <div>
      <Header />

      <Container>
        <Profile />
      </Container>
    </div>
  )
}
