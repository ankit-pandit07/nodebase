import { requireAuth } from "@/lib/auth-utlis";

interface PageProps{
    params:Promise<{
        executionId: string;
    }>
}
const Page=async({params}:PageProps)=>{
    await requireAuth();
    const {executionId}=await params;
    return <p>Execution Id: {executionId}</p>
}

export default Page;