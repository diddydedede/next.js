import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Question 5 Answer</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-left lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/q5"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Question 5 Answer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue. 
            <br /><br />
            Hi there,<br />

I keep getting a build error from Vercel saying that "/vercel/path0/dist/routes-manifest.json" couldn't be found. Can you help me debug this?? I'm so frustrated. I've been trying to make this work for hours and I just can't figure it out. Your docs aren't helpful.<br /><br />
            Answer: <br />Hi [Customer's Name],<br /><br />

I'm sorry to hear that you're experiencing issues with your build and that you've found our documentation unhelpful. I'm here to assist you in resolving this problem.<br /><br />

The error message you're encountering indicates that the routes-manifest.json file is missing or not being generated correctly during the build process. To help you troubleshoot this issue, I'll need some additional information about your project setup:<br />

1. Can you please provide the repository URL for your project so I can take a closer look at your configuration and source code? If the repository is private, please grant access to my account (username: VercelSupport).<br />

2. Are you using any custom build configuration or scripts that might be interfering with the generation of the routes-manifest.json file?<br />

3. Have you made any recent changes to your project that might have led to this issue?<br />

4. Can you share any relevant logs or error messages from your build output? You can find them in the Vercel dashboard under the "Deployments" tab.<br /><br />

Please provide the requested information, and I'll do my best to help you resolve this issue as quickly as possible. In the meantime, you can also review our <a href="https://vercel.com/guides" className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" rel="noopener noreferrer">Next.js Troubleshooting Guide</a> for any additional insights.<br /><br />

Thank you for your patience, and I look forward to helping you get your project back on track!<br /><br />

Best regards,<br /><br />

Brian Song<br />
Vercel Senior Customer Success Engineer
          </p>
        </Link><br />

        <Link
          href="../"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Back to Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link><br />

        <Link
          href="../q4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Question 4{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
          </p>
        </Link><br />

        <Link
          href="/aq1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Additional Question 1{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term? 
          </p>
        </Link><br />

      </div>
    </main>
  )
}
