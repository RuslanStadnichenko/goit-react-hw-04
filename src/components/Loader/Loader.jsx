import { BallTriangle } from 'react-loader-spinner';

import { Backdrop } from '../Backdrop/Backdrop';
export const Loader = () => {
  return (
    <Backdrop>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Backdrop>
  );
};