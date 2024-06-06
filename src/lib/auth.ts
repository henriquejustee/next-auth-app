import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from 'uuid';


import { db as prisma } from "@/lib/db"
import { randomUUID } from "crypto"


export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma as any),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text" }
            },
            async authorize(credentials) {
                if (credentials?.email) {
                    console.log(credentials);
                    const user = { id: uuidv4(), name: credentials.name, email: credentials.email, password: credentials.password };

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