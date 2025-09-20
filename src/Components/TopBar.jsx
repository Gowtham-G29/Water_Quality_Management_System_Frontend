import WaterDropIcon from '@mui/icons-material/WaterDrop';

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 z-50">
      <div className="flex items-center justify-center gap-2">
        <WaterDropIcon className="text-blue-500" fontSize="large" />
        <h1 className="text-xl font-bold font-serif bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
          Water Quality Management System
        </h1>
      </div>
    </div>
  );
}

export default TopBar;
