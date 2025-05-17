import { type ApiSchemas } from "@/shared/api/schema";
import { BoardsFavoriteToggle } from "../ui/boards-favorite-toggle";
import { BoardsListItem } from "@/features/boards-list/ui/board-list-item";
import { DropdownMenuItem } from "@/shared/ui/kit/dropdown-menu";
import { useDeleteBoard } from "@/features/boards-list/model/use-delete-boards";
import { useUpdateFavorite } from "../model/use-update-favorite";

export function BoardItem({ board }: { board: ApiSchemas["Board"] }) {
  const deleteBoard = useDeleteBoard();
  const updateFavorite = useUpdateFavorite();

  return (
    <BoardsListItem
      key={board.id}
      board={board}
      rightActions={
        <BoardsFavoriteToggle
          isFavorite={updateFavorite.isOptimisticFavorite(board)}
          onToggle={() => updateFavorite.toggle(board)}
        />
      }
      menuActions={
        <DropdownMenuItem
          variant="destructive"
          disabled={deleteBoard.getIsPending(board.id)}
          onClick={() => deleteBoard.deleteBoard(board.id)}
        >
          Удалить
        </DropdownMenuItem>
      }
    />
  );
}
