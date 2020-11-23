import Lottie from 'react-lottie';
import load from '../sources/loading.json';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: load,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="loading-div">
            <Lottie 
	          options={defaultOptions}
              height={400}
              width={400}
              isClickToPauseDisabled={true}
            />
            <h1 style={{color:"red",textAlign:"center"}}>Loading Data...</h1>
        </div>
    )
}

export default Loading;
