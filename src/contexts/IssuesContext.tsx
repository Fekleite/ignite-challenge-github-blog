import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/axios";

interface Issue {
  id: number,
  number: number,
  title: string,
  body: string,
  created_at: string,
}

interface Search {
  items: Issue[]
}

interface IssuesContextType {
  issues: Issue[]
  searchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const searchIssues = useCallback(async (query?: string) => {
    const { data } = await api.get<Search>(`/search/issues`, {
      params: {
        q: ` ${query} repo:Fekleite/ignite-challenge-github-blog`
      },
    })

    setIssues(data.items)
  }, [])

  useEffect(() => {
    searchIssues('')
  }, [searchIssues]);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        searchIssues
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}