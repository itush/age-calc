import AgeForm from "@/components/AgeForm"
export default function Home() {

  return (
    <>
    <main className="w-[80%] mx-auto mt-[20%] flex flex-col justify-center items-center
      rounded-3xl overflow-hidden p-4 border-l-8 
      border-t-2 border-r-2 border-b-2 border-Purple md:w-[40%] md:mt-[5%]">
      
      <AgeForm />
      
      
      
    </main>
        
    <footer className='text-center text-xs mt-[25%] text-gray-500' >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://tusharthe.vercel.app/" target="_blank">Tushar Biswas</a>.
      </footer>
        </>
  )
}
