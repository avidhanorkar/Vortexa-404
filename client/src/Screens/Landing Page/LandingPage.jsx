import Spline from '@splinetool/react-spline';
import UserLogin from './userLogin.jsx';
import AdminLogin from './adminLogin.jsx';
import Features from './Features.jsx';
import Testimonials from './Testimonials.jsx'
import Footer from '../Footer/footer.jsx';
import Navbar from '../nav.jsx';

const Landing = () => {
  return (
    <>
    <Navbar />
      <div className='flex flex-row w-[100vw] h-[100vh] bg-[#000] justify-center'>
        
        <div className='w-1/2 h-[100vh] p-[100px] flex flex-col'>
            <p className='text-8xl'>Achieve<span className='text-9xl text-[#ECDBB5]'>X</span></p>
            <p className='text-3xl '>Unleash your true potential</p>
            <p className='text-2xl text-gray-500 pt-8'>Learning doesn’t have to be a chore. </p>
            <p className='text-2xl text-gray-500 '>At <span className='text-[#fff]'>Achieve<span className='text-[#ECDBB5]'>X</span></span>, we make education exciting through gamification! Ready to transform your learning experience? Join today and turn your journey into a fun, rewarding adventure</p>
            <p className='text-2xl text-gray-500 pt-[100px]'>Explore More...</p>
        </div>
        <div className='bulb w-1/2 h-[100vh] bg-[#000]'>
          <main className='h-[100vh] bg-[#000]'>
            <Spline scene="https://prod.spline.design/V1t5Aaz0q4Nwszbs/scene.splinecode" />
          </main>
        </div>
      </div>
      <div className="login h-[100vh] w-[100vw] bg-[#000] flex  flex-row justify-center items-center gap-10">
        <UserLogin />
        <AdminLogin />
      </div>
      <div className="login h-[100vh] w-[100vw] bg-[#000] flex  flex-row justify-center items-center gap-10">
        <Features />
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
