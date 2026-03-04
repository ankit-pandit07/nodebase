import {checkout, polar, portal} from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { polarClient } from "./polar";

export const auth = betterAuth({
  database:prismaAdapter(prisma,{
    provider:"postgresql",
  }),
  emailAndPassword:{
    enabled:true,
    autoSignIn:true
  },
  plugins:[
    polar({
      client:polarClient,
      createCustomerOnSignUp:true,
      use:[
        checkout({
          products:[
            {
              productId:"5535b590-f21c-43c3-b7b9-476b6412a78b",
              slug:"pro",
            }
          ],
          successUrl:process.env.POLAR_SUCCESS_URL,
          authenticatedUsersOnly:true
        }),
        portal()
      ]
    })
  ]
});