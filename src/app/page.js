import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">
      <h1 className="text-3xl font-semibold mb-1">Jason Ferrell</h1>
      <h2 className="text-xl font-medium mb-8">web architect, music lover and wannabe chef.</h2>
      <h3 className="text-lg mb-0 font-medium">Current work</h3>
      <p className="max-w-xl mb-8">Building a content authoring app tailored for knowledge management and creating rich UI experiences.</p>
      <p>Asheville, NC</p>  
    </main>
  )
}
