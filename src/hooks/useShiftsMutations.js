// src/hooks/useShiftsMutations.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShift, deleteShift } from "../api/shifts";
import { useElderlyPerson } from "../context/ElderlyPersonContext.jsx";

export function useShiftsMutations() {
  const queryClient = useQueryClient();
  const { activePerson } = useElderlyPerson();

  const addShiftMutation = useMutation({
    mutationFn: addShift,
    onSuccess: (data, variables, context, mutation) => {
      queryClient.invalidateQueries(["shifts", activePerson?.id]);
      // The actual onSuccess callback from the component will be called in the component itself
      // by passing it to the mutate function.
    },
    // onError can be handled similarly if needed, or directly in the component
  });

  const deleteShiftMutation = useMutation({
    mutationFn: deleteShift,
    onSuccess: () => {
      queryClient.invalidateQueries(["shifts", activePerson?.id]);
    },
    // onError will be handled by the component, as per current implementation
  });

  // We return the mutate functions directly, or the whole mutation objects
  // if more control is needed (e.g., for isLoading, isError states of the mutation)
  // For this task, returning the mutation objects themselves is more flexible.
  return { addShiftMutation, deleteShiftMutation };
}
