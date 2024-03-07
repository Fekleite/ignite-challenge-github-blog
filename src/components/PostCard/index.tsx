import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";

import { CardContainer, PostBody } from "./styles";

interface PostProps {
  id: number,
  number: number,
  title: string,
  body: string,
  created_at: string,
}

export function PostCard({ number, title, body, created_at }: PostProps) {
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR
  })

  return (
    <CardContainer to={`/post/${number}`}>
      <header>
        <h1>{title}</h1>

        <span>{formattedDate}</span>
      </header>

      <PostBody>
        <Markdown>{body}</Markdown>
      </PostBody>
    </CardContainer>
  )
}