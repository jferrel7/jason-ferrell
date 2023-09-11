import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">
      <h1 className="text-3xl font-semibold mb-1 text-">Jason Ferrell</h1>
      <h2 className="text-xl font-medium mb-8 text-gray-700">web architect, music lover and wannabe chef.</h2>
      <h3 className="text-lg mb-0 font-medium text-gray-500">Current work</h3>
      <p className="max-w-xl mb-8">Building a web content authoring app designed to promote organizational learning and knowledge.</p>
      <p className="text-gray-500">Asheville, NC</p>  
    </main>
  )
}
