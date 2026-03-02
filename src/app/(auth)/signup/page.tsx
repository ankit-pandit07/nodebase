import { RegisterForm } from "@/features/auth/components/register-form";
import { requireAuth } from "@/lib/auth-utlis";

const Page=async()=>{
    await requireAuth();
    
    return <RegisterForm />;
}

export default Page;