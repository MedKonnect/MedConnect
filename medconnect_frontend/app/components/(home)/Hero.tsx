import Nav from './Nav'
import Button from '../ui/button'


const Hero = () => {
  return (
    <section className='mx-4 my-2 xl:mx-12 xl:my-6'>
        <div className='h-[93vh] flex flex-col justify-between text-white bg-[url("/img/bg.webp")] bg-cover bg-no-repeat px-4 lg:px-12 py-4 lg:py-8 max-w-screen-2xl rounded-[40px] mx-auto'>
            <Nav/>
            <div className='flex flex-col xl:w-[60ch] gap-y-5 pb-6 justify-start'>
                <div className=''>
                    <h1 className='text-[50px] leading-[1.1] lg:text-[62px] font-medium lg:leading-[80px]'>
                        Be The Center of your Health Journey
                    </h1>
                </div>
                <div className='lg:w-[40ch] flex flex-col gap-y-6 pr-8'>
                    <p>Access your health records, consult with doctors, and manage prescriptions—all in one place. </p>
                    <Button size='md' variant="solid">Sign up</Button>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Hero