// src/hooks/useShiftsQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/notes.js"; 

export function useNotesQuery(personId) {
  const queryResult = useQuery({
    queryKey: ["notes", personId],
    queryFn: () => fetchNotes(personId),
    enabled: !!personId, // Only run the query if personId is truthy
  });

  return queryResult;
}
