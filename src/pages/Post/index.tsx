import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { FaArrowUpRightFromSquare, FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa6";
import { Container, PostInfo, PostResume, Content } from "./styles";

export function Post() {
  return (
    <div>
      <Header />

      <Container>
        <PostInfo>
          <header>
            <Link to="/">
              <FaChevronLeft />

              VOLTAR
            </Link>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              VER NO GITHUB

              <FaArrowUpRightFromSquare />
            </a>
          </header>

          <h1>JavaScript data types and data structures</h1>

          <PostResume>
            <div>
              <FaGithub />
              <span>cameronwll</span>
            </div>

            <div>
              <FaCalendarDay />
              <span>Há 1 dia</span>
            </div>

            <div>
              <FaComment />
              <span>5 comentários</span>
            </div>
          </PostResume>
        </PostInfo>

        <Content>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </Content>
      </Container>
    </div>
  )
}