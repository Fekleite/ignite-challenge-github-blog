import { Link, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa6";

import { Header } from "../../components/Header";
import { ExternalLink } from "../../components/ExternalLink";

import { Container, PostInfo, PostResume, Content } from "./styles";

import { api } from "../../services/axios";

interface IssueState {
  id: number,
  title: string,
  body: string,
  created_at: string,
  html_url: string
  user: {
    login: string
  },
  comments: number
}

export function Post() {
  const [issue, setIssue] = useState<IssueState>({} as IssueState);

  const { postId } = useParams()

  const formattedDate = issue?.created_at && formatDistanceToNow(new Date(issue.created_at), {
    addSuffix: true,
    locale: ptBR
  })

  useEffect(() => {
    async function getIssue() {
      const { data } = await api.get<IssueState>(`/repos/Fekleite/ignite-challenge-github-blog/issues/${postId}`)

      setIssue(data)
    }

    if (postId) {
      getIssue()
    }
  }, [postId])

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

            <ExternalLink url={issue?.html_url} text="ver no github" />
          </header>

          <h1>{issue?.title}</h1>

          <PostResume>
            <div>
              <FaGithub />
              <span>{issue?.user?.login}</span>
            </div>

            <div>
              <FaCalendarDay />
              <span>{formattedDate}</span>
            </div>

            <div>
              <FaComment />
              <span>{issue?.comments} comentários</span>
            </div>
          </PostResume>
        </PostInfo>

        <Content>
          <Markdown>{issue?.body}</Markdown>
        </Content>
      </Container>
    </div>
  )
}