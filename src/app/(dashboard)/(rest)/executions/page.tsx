import { requireAuth } from "@/lib/auth-utlis";

const Page=async()=>{
    await requireAuth();
    return <p>executions</p>
}

export default Page;