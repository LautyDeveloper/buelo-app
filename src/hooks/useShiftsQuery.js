// src/hooks/useShiftsQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchShifts } from "../api/shifts";

export function useShiftsQuery(personId) {
  const queryResult = useQuery({
    queryKey: ["shifts", personId],
    queryFn: () => fetchShifts(personId),
    enabled: !!personId, // Only run the query if personId is truthy
  });

  return queryResult;
}
