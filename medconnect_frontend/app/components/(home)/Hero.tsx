import Nav from './Nav'
import Button from '../ui/button'


const Hero = () => {
  return (
    <section className='mx-4 my-2 xl:mx-12 xl:my-6'>
        <div className='h-[90vh] flex flex-col justify-between text-white bg-[url("/img/bg.webp")] bg-cover bg-no-repeat px-4 lg:px-12 py-4 lg:py-8 max-w-screen-2xl rounded-[40px] mx-auto'>
            <Nav/>
            <div className='grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-10 pb-20 justify-between justify-items-end'>
                <div className=' xl:mt-[-100px]'>
                    <h1 className='text-[62px] leading-[1]'>
                        Be connected with your health
                    </h1>
                </div>
                <div className='lg:w-[40ch] flex flex-col gap-y-5 pr-8'>
                    <p>Access your health records, consult with doctors, and manage prescriptions—all in one place. </p>
                    <Button size='lg' variant="solid">Sign up</Button>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Hero