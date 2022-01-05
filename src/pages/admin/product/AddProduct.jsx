import React, { useState, useRef } from 'react';
import LabelInput from './../../../components/form/LabelInput';
import PrimaryButton from './../../../components/button/PrimaryButton';
import ImagesPreviewArea from '../../../components/form/ImagesPreviewArea';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [category, SetCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');

  const [images, setImages] = useState([]);

  const [nameError, setNameError] = useState('');
  const [productCodeError, setProductCodeError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [discountPriceError, setDiscountPriceError] = useState('');

  const imageSelectRef = useRef(null);

  const reorderImages = (from, to) => {
    setImages((prev) => {
      const temp = [...prev];
      const [removedImage] = temp.splice(from, 1);
      temp.splice(to, 0, removedImage);
      return temp;
    });
  };

  return (
    <>
      <h1 className="text-center py-2 text-3xl font-bold">Thêm sản phẩm</h1>
      <div className="mx-8">
        <hr />
      </div>
      <form className="w-full px-8 py-6 flex flex-col gap-4">
        <LabelInput
          label="Tên sản phẩm"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
          required={true}
        />
        <LabelInput
          label="mã sản phẩm"
          placeholder="Mã sản phẩm"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
          error={productCodeError}
          required={true}
        />
        <div className=" flex justify-between items-center">
          <label htmlFor="" className="font-bold">
            Ảnh sản phẩm{' '}
            <span className="font-normal">
              (Di chuyển ảnh để sắp xếp thứ tự. Ảnh đầu tiên sẽ được sử dụng làm
              ảnh chính)
            </span>
          </label>
          <input
            type="file"
            id="img"
            accept="image/*"
            multiple
            ref={imageSelectRef}
            onChange={(e) => {
              const files = e.target.files;
              for (const file of files) {
                const image = {
                  name: file.name,
                  url: URL.createObjectURL(file),
                  file: file,
                };
                setImages((prev) => [...prev, image]);
              }
            }}
            hidden
          />
          <PrimaryButton
            className="bg-primary text-white font-bold"
            onClick={(e) => {
              e.preventDefault();
              imageSelectRef.current.click();
            }}>
            Choose image
          </PrimaryButton>
        </div>
        <ImagesPreviewArea images={images} reorder={reorderImages} />
      </form>
    </>
  );
};

export default AddProduct;
