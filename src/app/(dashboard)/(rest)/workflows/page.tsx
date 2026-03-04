import { requireAuth } from "@/lib/auth-utlis";

const Page=async()=>{
    await requireAuth();
    
    return <p>Workflows</p>
}

export default Page;