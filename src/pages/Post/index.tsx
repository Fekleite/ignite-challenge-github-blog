import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { useContextSelector } from "use-context-selector";
import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa6";

import { Header } from "../../components/Header";
import { ExternalLink } from "../../components/ExternalLink";

import { Container, PostInfo, PostResume, Content } from "./styles";

import { IssuesContext } from "../../contexts/IssuesContext";
import { dateFormatter } from "../../utils/formatter";

export function Post() {
  const { post, getPost } = useContextSelector(IssuesContext, (context) => {
    return {
      post: context.post,
      getPost: context.getPost
    }
  })

  const { postId } = useParams()

  useEffect(() => {
    if (postId) {
      getPost(postId)
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

            <ExternalLink url={post?.html_url} text="ver no github" />
          </header>

          <h1>{post?.title}</h1>

          <PostResume>
            <div>
              <FaGithub />
              <span>{post?.user?.login}</span>
            </div>

            <div>
              <FaCalendarDay />
              <span>{post?.created_at && dateFormatter(post.created_at)}</span>
            </div>

            <div>
              <FaComment />
              <span>{post?.comments} comentários</span>
            </div>
          </PostResume>
        </PostInfo>

        <Content>
          <Markdown>{post?.body}</Markdown>
        </Content>
      </Container>
    </div>
  )
}