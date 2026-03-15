import { CredentailView } from "@/features/credentials/components/credential";
import { CredentialsError, CredentialsLoading } from "@/features/credentials/components/credentials";
import { prefetchCredential } from "@/features/credentials/server/prefetch";
import { requireAuth } from "@/lib/auth-utlis";
import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "@sentry/nextjs";
import { Suspense } from "react";

interface PageProps{
    params:Promise<{
        credentialId: string;
    }>
}
const Page=async({params}:PageProps)=>{
    await requireAuth();
    const {credentialId}=await params;

    prefetchCredential(credentialId);

    return (
        <HydrateClient>
        <ErrorBoundary fallback={<CredentialsError />}>
        <Suspense fallback={<CredentialsLoading />}>
        <CredentailView credentialId={credentialId}/>
        </Suspense>
        </ErrorBoundary>
        </HydrateClient>
    )
}

export default Page;