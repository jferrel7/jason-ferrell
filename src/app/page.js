import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">
      <h1 className="text-3xl font-semibold mb-2 text-gray-700">Jason Ferrell</h1>
      <h2 className="text-xl font-medium mb-12 text-gray-400">web architect, music lover and wannabe chef.</h2>
      <h3 className="text-lg mb-2 font-medium text-gray-700">Current work</h3>
      <p className="max-w-xl mb-12 text-gray-400">
        Building an enterprise knowledge portal solution, with an integrated block editor for creating structured content. The types of structured content are instruction steps, troubleshooting/how-to info, training curriculum that includes user specific status, trackable action items, and also straight rich text, tables, images, and videos. 
      </p>
      <ul className="mb-12">
        <li><a href="https://github.com/jferrel7" title="Github" className="text-purple-500">Github</a></li>
        <li><a href="https://www.linkedin.com/in/jasonferrell/" title="LinkedIn" className="text-purple-500">LinkedIn</a></li>
      </ul>      
      <p className="text-gray-400">
        Asheville, NC
      </p>  
    </main>
  )
}


