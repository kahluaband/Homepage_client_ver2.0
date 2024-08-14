import { CircularProgress, colors } from '@mui/material';

export default function Loading() {
  console.log('loading');
  return (
    <div className="flex flex-col justify-center items-center font-pretendard text-gray-60 text-center">
      <CircularProgress sx={{ color: '#5D6279' }} />
      Loading...
    </div>
  );
}
