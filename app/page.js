import { MainProducts } from '@/components/MainProducts';
import React from 'react';

const page = () => {
  return (
    <div className="w-screen h-screen bg-slate-600 bg-opacity-20 p-5 overflow-hidden">
      <MainProducts/>
    </div>
  );
};

export default page;