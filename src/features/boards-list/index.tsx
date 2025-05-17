export { BoardCard } from "@/features/boards-list/board-card";
import { Link, href } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";

export function BoardsListPage() {
  return (
    <div>
      BoardList
      <Link to={href(ROUTES.BOARD, { boardId: "1" })}>Board 1</Link>
    </div>
  );
}

