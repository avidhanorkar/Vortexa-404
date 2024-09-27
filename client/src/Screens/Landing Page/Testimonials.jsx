const Testimonials = () => {
    return (
        <>
            <div className="container w-2/5 h-3/5 bg-[#121212] flex flex-col gap-[50px] justify-center rounded">
                <p className="text-4xl text-center text-[#fff] font-bold">Testimonials</p>
                <div className="flex justify-center align-center flex-col">
                    <div className="bg-[#000] w-[90%] p-[20px] rounded">
                        <div className='flex flex-row gap-8'>
                            <img className="h-[50px] w-[50px] rounded-[100%]" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className='flex flex-col'>
                                <p className='name text-2xl font-[600]'>John Doe</p>
                                <p className='designation text-1xl text-gray-500'>Ai Consultant</p>
                            </div>
                        </div>

                        <div><p>"I was initially skeptical about AchieveX. I wasn't sure if it could really help me improve my skills. However, after using it for a while, I was blown away by the results. AchieveX has exceeded my expectations in every way. The personalized feedback, interactive exercises, and progress tracking have all been invaluable. I'm so thankful for the positive impact AchieveX has had on my learning journey."</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;