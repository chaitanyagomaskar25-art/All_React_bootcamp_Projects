import { useMutation } from "@tanstack/react-query";
import { askGemini } from "../api/geminiApi";

export const useGemini = () => {
  return useMutation({
    mutationFn: askGemini,
  });
};