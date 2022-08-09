import type { NextPage } from 'next'
import { useState } from 'react';
import axios from 'axios'

const Home: NextPage = () => {

  const[url,setUrl] = useState('');
  const[response,setResponse] = useState(null);
  const[loading,setLoading] = useState(false);

 const getScreenshot = async () => {
		try {
			const res = await axios.get('api/screenshots', {
				params: {url:url} // Pass the user input url to our API as a parameter
			});
			const {data} = res; // Destructure data from the response
			setResponse(data.screenshotUrl); // Store URL of screenshot received in API response
		} catch (error) {
			console.error(error);
		}
	};

  return (
    <div className='flex flex-col min-h-screen font-roboto items-center bg-slate-200 px-0 md:px-12'>
        <h1 className='text-6xl font-bold mt-12'>
        Screenshot <span className='text-violet-800'>App</span>
        </h1>
        <h2 className='text-active text-2xl mt-6 text-violet-800'>
          Get screenshot of any given URL.  
        </h2>
        <form
				className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
				onSubmit={e => {
          getScreenshot();
					e.preventDefault(); // Allow enter key to submit
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full rounded-lg px-5 py-3 text-base text-violet-800 font-semibold focus:outline-none focus:ring-2 focus:ring-violet-800"
					placeholder="Enter a url eg: https://example.com"
          onChange={e => {
            setUrl(e.target.value); // store input url
            setResponse(null); // remove previous screenshot
          }}
				/>
				<button
					className="mt-5 w-full rounded-lg px-5 py-3 bg-violet-800 text-base text-slate-200 font-bold hover:text-violet-800 hover:bg-slate-200 hover:border-violet-800  transition-colors duration-300 sm:px-10 border-2 border-vioeter-800"
					type="submit"
				>
					Submit
				</button>
			</form>

      {response && (
				<div className="mt-10 ">
					<h2 className="text-xl font-bold text-violet-800">
						Screenshot
					</h2>
					<img
						src={response}
						className="mt-3 w-full h-full rounded-lg"
					/>
				</div>
			)}
    </div>
  )
}

export default Home
