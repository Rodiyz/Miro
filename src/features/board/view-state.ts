import { useState } from "react";

type AddStickerVievState = {
  type: "addSticker"
};

type IdleViewState = {
  type: "idle"
};

type ViewState = AddStickerVievState | IdleViewState;

export function useBoardViewState() {
  const [viewState, setViewState] = useState<ViewState>({
    type: "idle",
  });

  return {
    viewState,
  };
}