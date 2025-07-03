// src/hooks/useShiftsMutations.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShift, deleteShift } from "../api/shifts";
import { useElderlyPerson } from "../context/ElderlyPersonContext.jsx";
import { useNotification } from "../context/NotificationContext.jsx"; // Import useNotification

export function useShiftsMutations() {
  const queryClient = useQueryClient();
  const { activePerson } = useElderlyPerson();
  const { addNotification } = useNotification(); // Get addNotification function

  const addShiftMutation = useMutation({
    mutationFn: addShift,
    onSuccess: () => { // component's onSuccess is called via mutate options
      queryClient.invalidateQueries(["shifts", activePerson?.id]);
      addNotification("Shift created successfully!", "success");
    },
    // onError will be handled by the component calling mutate
  });

  const deleteShiftMutation = useMutation({
    mutationFn: deleteShift,
    onSuccess: () => { // component's onSuccess is called via mutate options
      queryClient.invalidateQueries(["shifts", activePerson?.id]);
      addNotification("Shift deleted successfully!", "success");
    },
    // onError will be handled by the component calling mutate
  });

  // We return the mutate functions directly, or the whole mutation objects
  // if more control is needed (e.g., for isLoading, isError states of the mutation)
  // For this task, returning the mutation objects themselves is more flexible.
  return { addShiftMutation, deleteShiftMutation };
}
