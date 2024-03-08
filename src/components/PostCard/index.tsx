import { CardContainer, PostBody } from "./styles";
import { dateFormatter } from "../../utils/formatter";

interface PostProps {
  id: number,
  number: number,
  title: string,
  body: string,
  created_at: string,
}

export function PostCard({ number, title, body, created_at }: PostProps) {
  return (
    <CardContainer to={`/post/${number}`}>
      <header>
        <h1>{title}</h1>

        <span>{dateFormatter(created_at)}</span>
      </header>

      <PostBody>
        {body}
      </PostBody>
    </CardContainer>
  )
}