import DSAList from "./DSAList";

export default function ProgressTracker() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-[#000] w-[100vw]">
            <p className='text-8xl'>Achieve<span className='text-9xl text-[#ECDBB5]'>X</span></p>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r 
                               from-purple-500 to-pink-500 font-bold text-xl mb-4">
                    DSA Tracker
                </h3>
                <DSAList />
            </div>
        </>
    );
}