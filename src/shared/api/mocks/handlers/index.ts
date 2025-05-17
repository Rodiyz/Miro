import { HttpResponse } from "msw";
import { http } from "../http";
import type { ApiSchemas } from "../../schema";

const boards: ApiSchemas["Board"][] = [
  {
    id: "1",
    name: "Board 1",
    createdAt: "",
    updatedAt: "",
    lastOpenedAt: "",
    isFavorite: false
  },
  {
    id: "2",
    name: "Board 2",
    createdAt: "",
    updatedAt: "",
    lastOpenedAt: "",
    isFavorite: false
  },
];

export const handlers = [
  http.get("/boards", async () => {
    return HttpResponse.json(boards);
  }),
  http.post("/boards", async (ctx) => {
    const data = await ctx.request.json();
    const board = {
      id: crypto.randomUUID(),
      name: data.name,
    };
    boards.push(board);
    return HttpResponse.json(board);
  }),
  http.delete("/boards/{boardId}", ({ params }) => {
    const { boardId } = params;
    const index = boards.findIndex((board) => board.id === boardId);
    if (index === -1) {
      return HttpResponse.json(
        { message: "Board not found", code: "NOT_FOUND" },
        { status: 404 },
      );
    }
    boards.splice(index, 1);
    return HttpResponse.json({
      message: "Board deleted",
      code: ""
    });
  }),
];