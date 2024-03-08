import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/axios";

interface Issue {
  id: number,
  number: number,
  title: string,
  body: string,
  created_at: string,
  html_url: string
  user: {
    login: string
  },
  comments: number
}

interface Search {
  items: Issue[]
}

interface IssuesContextType {
  issues: Issue[]
  searchIssues: (query?: string) => Promise<void>
  post: Issue
  getPost: (postId: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [post, setPost] = useState<Issue>({} as Issue)

  const searchIssues = useCallback(async (query?: string) => {
    const { data } = await api.get<Search>(`/search/issues`, {
      params: {
        q: ` ${query} repo:Fekleite/ignite-challenge-github-blog`
      },
    })

    setIssues(data.items)
  }, [])

  const getPost = useCallback(async (postId: string) => {
    const { data } = await api.get<Issue>(`/repos/Fekleite/ignite-challenge-github-blog/issues/${postId}`)

    setPost(data)
  }, [])

  useEffect(() => {
    searchIssues('')
  }, [searchIssues]);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        searchIssues,
        post,
        getPost
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}