import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex lg:px-36 items-center gap-10 mt-10'>
            <div className='lg:w-[50%] lg:px-0 px-6'>
                <h1 className='text-5xl font-bold mb-1'>African <span className='text-yellow-400 hover:text-yellow-300'>Super</span> Food</h1>
                <h3 className='text-3xl mb-2 font-semibold'>6 Chef Details Here</h3>
                <p>We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food in (CN).  We offer limited capacity onsite events in our restaurant kitchen space. And worry not, our krewe will travel to your destination of choice – from hotel ballrooms to private kitchens – to entertain groups of all sizes. We cook, we tell stories, we deliver informative culinary demonstrations and lectures, but most of all … we treat every event like you’re a guest at our dinner table. Join us!</p>
                <button className='bg-yellow-400 hover:bg-yellow-300 px-6 py-2 lg:mb-0 mb-4 rounded-lg font-semibold mt-2'>See More</button>
            </div>
            <div>
                <img className='rounded-lg lg:px-0 px-6' src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?w=740&t=st=1683015947~exp=1683016547~hmac=cc40e2162f95571c19ad5af0f5d7a4e5768a4b9ec5525639c3516d5f5f7d8f84" alt="" />
            </div>
        </div>
    );
};

export default Banner;