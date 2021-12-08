// Copyright 2021 Pujit Mehrotra
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Link from "next/link";
import { useRouter } from "next/router";
import { join, centeredColumn } from "../style";

export default function SymptomsSummary() {
  const router = useRouter();
  let { symptoms = ["No Symptoms"] } = router.query as { symptoms: string[] };
  if (typeof symptoms === "string") symptoms = [symptoms]; // one element array will parse as string in query

  return (
    <div className={join(centeredColumn, "min-h-screen bg-blue-50")}>
      <p className="mb-4 text-xl">Patient's Symptoms</p>
      {symptoms.map((symptom) => (
        <p>{symptom}</p>
      ))}
      <BackButton />
    </div>
  );
}

function BackButton() {
  return (
    <Link href="/">
      <a className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-md">
        Go Back
      </a>
    </Link>
  );
}
