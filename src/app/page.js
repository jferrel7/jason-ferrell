import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">
      <h1 className="text-3xl font-semibold mb-1 text-">Jason Ferrell</h1>
      <h2 className="text-xl font-medium mb-8 text-gray-700">web architect, music lover and wannabe chef.</h2>
      <h3 className="text-lg mb-0 font-medium text-gray-500">Current work</h3>
      <p className="max-w-xl mb-8">Building a web content authoring app designed to promote organizational learning and knowledge.</p>
      <ul className="mb-4">
        <li><a href="https://github.com/jferrel7" title="Github" className="text-purple-500">Github</a></li>
        <li><a href="https://instagram.com/jasonferrell" title="Instagram" className="text-purple-500">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/jasonferrell/" title="LinkedIn" className="text-purple-500">LinkedIn</a></li>
      </ul>      
      <p className="text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-0.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        Asheville, NC
      </p>  
  
    </main>
  )
}
