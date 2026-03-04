// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { tr } from "date-fns/locale";

Sentry.init({
  dsn: "https://7ba5e8fa08d68f63ccab7d828fdc63ae@o4510981380046848.ingest.de.sentry.io/4510983992836176",

  integrations:[
    Sentry.vercelAIIntegration({
      recordInputs:true,
      recordOutputs:true
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
