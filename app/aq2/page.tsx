import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Additional Question 2 Answer</code>
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
          href="/aq1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Additional Question 2 Answer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            How could we improve or alter this familiarization exercise? 
            <br /><br />
            Answer: <br />For the question, I would like to specifically address the clarity of the exercise instructions.<br /><br />

The main five questions and the additional two questions in the exercise can be confusing as they seem to be grouped together. To improve the exercise, it would be helpful to separate these questions and make the relationship between them clearer. Here&apos;s an example of how the questions could be restructured:<br /><br />

Main Questions:<br />
a. What do you want to learn or do more of at work?<br />
b. Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful?<br />
c. How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.<br />
d. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?<br />
e. Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue:<br />
&quot;Hi there,<br />

I keep getting a build error from Vercel saying that &quot;/vercel/path0/dist/routes-manifest.json&quot; couldn`&apos;t be found. Can you help me debug this?? I`&apos;m so frustrated. I`&apos;ve been trying to make this work for hours and I just can`&apos;t figure it out. Your docs aren`&apos;t helpful.&quot;<br /><br />

Additional Questions:<br />
a. What do you think is one of the most common problems which customers ask Vercel for help with?<br />
b. How would you help customers to overcome common problems, short-term and long-term?<br /><br />

Feedback on the Exercise:<br />
a. How could we improve or alter this familiarization exercise?<br /><br />

By clearly separating the main questions, additional questions, and the feedback request, candidates will have a better understanding of the tasks and expectations in the exercise. This will lead to more organized and focused responses, allowing you to better evaluate the candidate&apos;s skills and problem-solving abilities.
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
          href="../aq1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
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
