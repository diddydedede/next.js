import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Additional Question 1 Answer</code>
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
            Additional Question 1 Answer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term? 
            <br /><br />
            Answer: <br />One of the most common problems that customers ask Vercel for help with is deployment issues. These can range from build errors and failed deployments to incorrect configurations and issues with third-party integrations. Customers may face challenges related to their custom setup, dependencies, or environment variables.<br /><br />

Short-term solutions:<br />

1. Provide prompt and thorough support: Respond quickly to customer inquiries and offer detailed explanations, troubleshooting steps, and potential solutions. Include links to relevant documentation or examples to help customers understand the issue and how to resolve it.<br />

2. Debugging and diagnostics: Help customers identify and isolate the cause of the issue, such as reviewing logs, examining source code, or reproducing the problem in a local environment. Offer guidance on best practices and recommendations for fixing the problem.<br />

3. Offer workarounds: In some cases, the issue may require a more in-depth investigation or a fix from the Vercel team. In such situations, suggest temporary workarounds that the customer can use to unblock their progress while the issue is being addressed.<br /><br />

Long-term solutions:<br />

1. Improve documentation: Based on customer feedback and common issues, continuously update and expand the documentation to cover a wider range of use cases, best practices, and troubleshooting guides.<br />

2. Enhance the product: Identify areas where the product can be improved to prevent common issues from occurring in the first place. This could include better error handling, more descriptive error messages, or enhanced user interface elements that guide customers through the setup and configuration process.<br />

3. Education and community support: Offer webinars, tutorials, blog posts, and other educational resources to help customers understand the platform and its capabilities better. Encourage the community to share their knowledge and experiences through forums, chat groups, and social media.<br /><br />

By addressing common problems through both short-term and long-term solutions, Vercel can help customers overcome challenges and ensure a smooth and successful experience with the platform.
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
          href="../q5"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Question 5{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue.
          </p>
        </Link><br />

        <Link
          href="/aq2"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Additional Question 2{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-100`}>
            How could we improve or alter this familiarization exercise? 
          </p>
        </Link><br />

      </div>
    </main>
  )
}
