"use client"

import { useTRPC } from "@/trpc/Client"
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client=()=>{
    const trpc=useTRPC();
    const {data:users}=useSuspenseQuery(trpc.getUsers.queryOptions())
return(   
     <div>
        Client compoenent: {JSON.stringify(users)}
    </div>
)
}