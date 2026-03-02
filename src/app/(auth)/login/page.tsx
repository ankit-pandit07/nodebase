import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utlis";

const Page=async()=>{
    await requireUnAuth();
    
    return <LoginForm />;  
}

export default Page;