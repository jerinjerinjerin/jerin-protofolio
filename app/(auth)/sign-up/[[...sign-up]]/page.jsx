"use client"
import { SignUp } from "@clerk/nextjs";

import Layout from "../../layout";

export default function Page() {
  return(  
    <Layout>
      <SignUp /> 
    </Layout>
)
}