// src/hooks/useShiftsQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchMedications } from "../api/medications";

export function useMedicationsQuery(personId) {
  const queryResult = useQuery({
    queryKey: ["medications", personId],
    queryFn: () => fetchMedications(personId),
    enabled: !!personId, // Only run the query if personId is truthy
  });

  return queryResult;
}
