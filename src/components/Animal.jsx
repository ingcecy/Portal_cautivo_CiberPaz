import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animal = () => {

    const styles= {
        backgroundColor: 'rgba(169, 202, 181, 0.8)',
        border: '1px',
        borderRadius: '40px',

    }
  return (
    <DotLottieReact
    style={styles}
      src="https://lottie.host/29625557-67a2-44f9-8b56-7d4563161488/C8v7UMzyAv.lottie"
      loop
      autoplay
    />
  );
};




export default Animal;