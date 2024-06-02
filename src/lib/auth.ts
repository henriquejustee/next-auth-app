import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"


import { db as prisma } from "@/lib/db"
import Github from "next-auth/providers/github"
import { randomUUID } from "crypto"

export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma as any),
    providers: [

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text" }
            },
            async authorize(credentials) {
                if (credentials) {
                    console.log(credentials);
                    const user = { id: randomUUID(), name: credentials.name, email: credentials.email, password: credentials.password };
                    return user;
                }
                else {
                    return null;
                }
            }

        })

    ],
    pages: {
        signIn: '/register'
    }
}