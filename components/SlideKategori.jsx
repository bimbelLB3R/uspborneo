import React from 'react';

const SlideKategori = ({ kategoris }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 bg-gray-800 text-white justify-center p-2 text-[12px] md:hidden overflow-x-auto underline">
        {kategoris.map((kategori) => (
          <div key={kategoris._id} className="flex">
            {kategori.kategori}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideKategori;
