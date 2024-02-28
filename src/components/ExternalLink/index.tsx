import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Link } from "./styles";

interface ExternalLinkProps {
  url: string;
  text?: string;
}

export function ExternalLink({ url, text }: ExternalLinkProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {text}

      <FaArrowUpRightFromSquare />
    </Link>
  )
}