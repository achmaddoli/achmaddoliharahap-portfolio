import { useState, useEffect } from 'react';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (!loading) return null;

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black z-50">
      <div className="w-10 h-10 border-4 border-zinc-700 border-t-violet-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default PreLoader;
