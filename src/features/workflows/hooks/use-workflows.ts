/**
 * Hook to fetch all workflows using suspense
 */

import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useWorkflowsParams } from "./use-workflows-params";

export const useSuspenseWorkflows=()=>{
    const trpc=useTRPC();

    return useSuspenseQuery(trpc.workflows.getMany.queryOptions({}));
};

/**
 * Hook to create a new workflow
 */
export const useCreateWorkflow=()=>{
    const queryClient=useQueryClient();
    const trpc=useTRPC();
    const [params]=useWorkflowsParams();

    return useMutation(
        trpc.workflows.create.mutationOptions({
            onSuccess:(data)=>{
                toast.success(`Workflow "${data.name}" created`);
                queryClient.invalidateQueries(
                    trpc.workflows.getMany.queryOptions(params),
                );
            },
            onError:(error)=>{
                toast.error(`Failed to create workflow: ${error.message}`);
            }
        }),
    );
};