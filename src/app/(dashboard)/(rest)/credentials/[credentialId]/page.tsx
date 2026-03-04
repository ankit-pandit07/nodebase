import { requireAuth } from "@/lib/auth-utlis";

interface PageProps{
    params:Promise<{
        credentialId: string;
    }>
}
const Page=async({params}:PageProps)=>{
    await requireAuth();
    const {credentialId}=await params;
    return <p>credentail Id: {credentialId}</p>
}

export default Page;