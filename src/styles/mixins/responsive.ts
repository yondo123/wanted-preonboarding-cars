import { useMediaQuery } from 'react-responsive';

const breackPoint = {
  min: '360px',
  max: '450px',
};

export default useMediaQuery({
  query: `(min-width:${breackPoint.min}) and (max-width:${breackPoint.max})`,
});
