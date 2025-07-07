// src/hooks/useShiftsMutations.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMedication, deleteMedication } from "../api/medications.js";
import { useElderlyPerson } from "../context/ElderlyPersonContext.jsx";
import { useNotification } from "../context/NotificationContext.jsx"; // Import useNotification

export function useMedicationsMutations() {
  const queryClient = useQueryClient();
  const { activePerson } = useElderlyPerson();
  const { addNotification } = useNotification(); // Get addNotification function

  const addMedicationMutation = useMutation({
    mutationFn: addMedication,
    onSuccess: () => { // component's onSuccess is called via mutate options
      queryClient.invalidateQueries(["medications", activePerson?.id]);
      addNotification("Medication created successfully!", "success");
    },
    // onError will be handled by the component calling mutate
  });

  const deleteMedicationMutation = useMutation({
    mutationFn: deleteMedication,
    onSuccess: () => { // component's onSuccess is called via mutate options
      queryClient.invalidateQueries(["medications", activePerson?.id]);
      addNotification("medication deleted successfully!", "success");
    },
    // onError will be handled by the component calling mutate
  });

  // We return the mutate functions directly, or the whole mutation objects
  // if more control is needed (e.g., for isLoading, isError states of the mutation)
  // For this task, returning the mutation objects themselves is more flexible.
  return { addMedicationMutation, deleteMedicationMutation };
}
