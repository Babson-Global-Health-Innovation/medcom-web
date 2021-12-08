import Head from "next/head";
import { SymptomsDisplay } from "../components/SymptomsDisplay";
import { symptoms } from "../config";
import { useRouter } from "next/router";
import { centeredColumn, join } from "../style";

export default function Home() {
  const router = useRouter();
  return (
    <div className={join(centeredColumn, "min-h-screen bg-blue-100")}>
      <Head>
        <title>MedCom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SymptomsDisplay
        symptoms={symptoms}
        onFinish={(symptoms) =>
          router.push(
            {
              pathname: "/summary",
              query: { symptoms: Array.from(symptoms) },
            },
            { pathname: "/summary" } // hide query string in browser
          )
        }
      />
    </div>
  );
}
