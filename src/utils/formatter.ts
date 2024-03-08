import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatter = (date: string) => formatDistanceToNow(new Date(date), {
  addSuffix: true,
  locale: ptBR
})