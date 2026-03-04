import { requireAuth } from "@/lib/auth-utlis";

const Page=async()=>{
    await requireAuth();
    return <p>credentials</p>
}

export default Page;