"use client";
import { SignIn } from "@clerk/nextjs";

import LayOut from "../../layout";

export default function Page() {
  return (
    <LayOut>
      <SignIn />
    </LayOut>
)
}