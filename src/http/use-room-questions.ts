import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";

export function useRoomQuestions(roomId: string) {
  // Conforme muda a room o id também muda por isso temos que incluir o id também no queryKey
  return useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });
}
