import React, { useState, useRef, useEffect } from 'react';
import LabelInput from './../../../components/form/LabelInput';
import PrimaryButton from './../../../components/button/PrimaryButton';
import ImagesPreviewArea from '../../../components/form/ImagesPreviewArea';
import LabelMultiSelectInput from './../../../components/form/LabelMultiSelectInput';
import NumberFormat from 'react-number-format';
import LabelSelectInput from './../../../components/form/LabelSelectInput';
import ErrorLabel from '../../../components/form/ErrorLabel';
import productApi from './../../../apis/product';

const stateOptions = [
  { value: 'available', label: 'Đang bán' },
  { value: 'outStock', label: 'Hết hàng' },
  { value: 'hidden', label: 'Ẩn' },
];

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [state, setState] = useState(stateOptions[0]);
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [warrantyPeriodByDay, setWarrantyPeriodByDay] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState('');

  const [brand, setBrand] = useState('');
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  const [titleError, setTitleError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [discountPriceError, setDiscountPriceError] = useState('');
  const [warrantyPeriodByDayError, setWarrantyPeriodByDayError] = useState('');
  const [availableQuantityError, setAvailableQuantityError] = useState('');
  const [categoriesError, setCategoriesError] = useState('');
  const [brandError, setBrandError] = useState('');

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then((brands) => {
        setBrandOptions(
          brands.map((brand) => ({ value: brand.id, label: brand.name }))
        );
      });
    fetch('/api/categories')
      .then((res) => res.json())
      .then((categories) => {
        setCategoryOptions(
          categories.map((category) => ({
            value: category.id,
            label: category.name,
          }))
        );
      });
  }, []);

  const imageSelectRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(brandError);
    if (haveError()) return;
    if (categories.length === 0) {
      setCategoriesError('Sản phẩm cần thuộC ít nhất một danh mục');
      return;
    }
    if (brand === '') {
      setBrandError('Sản phẩm cần có thương hiệu');
      return;
    }
    if (title.trim() === '') {
      setTitleError('Tên sản phẩm không thể để trống');
      return;
    }

    const result = await productApi.addProduct({
      title,
      detail,
      price,
      discountPrice,
      warrantyPeriodByDay,
      availableQuantity,
      state,
      brand,
      categories,
    });
    if (result.status === 200) {
      const productId = result.data.id;
      console.log(result.data);
      const result2 = await productApi.uploadImages(
        productId,
        images.map((image) => image.file)
      );
      if (result2.status === 200) {
        return alert('ok');
      }
      return alert('something not good :(');
    }
  };

  const haveError = () => {
    return (
      titleError !== '' ||
      warrantyPeriodByDayError !== '' ||
      availableQuantityError !== '' ||
      priceError !== '' ||
      discountPriceError !== '' ||
      categoriesError !== '' ||
      brandError !== ''
    );
  };

  const reorderImages = (from, to) => {
    setImages((prev) => {
      const temp = [...prev];
      const [removedImage] = temp.splice(from, 1);
      temp.splice(to, 0, removedImage);
      return temp;
    });
  };

  const onPriceChange = (e) => {
    const value = e.floatValue;
    setPrice(value);
    if (value < 0) {
      setPriceError('Giá sản phẩm không thể nhận giá trị âm');
      return;
    }
    setPriceError('');
    if (discountPrice < 0) {
      setDiscountPriceError('Giá sản phẩm không thể nhận giá trị âm');
      return;
    }
    if (value < discountPrice) {
      setDiscountPriceError('Giá khuyến mãi không thể cao hơn giá bán');
      return;
    }
    setDiscountPriceError('');
  };

  const onDiscountPriceChange = (e) => {
    const value = e.floatValue;
    setDiscountPrice(value);
    if (price < 0) {
      setPriceError('Giá sản phẩm không thể nhận giá trị âm');
      return;
    }
    if (value > price) {
      setDiscountPriceError('Giá khuyến mãi không thể cao hơn giá bán');
      return;
    }
    if (value < 0) {
      setDiscountPriceError('Giá sản phẩm không thể nhận giá trị âm');
      return;
    }
    setDiscountPriceError('');
  };

  const onImagesSelect = (e) => {
    const files = e.target.files;
    setImages((prev) => {
      const tempImages = [...prev];
      for (const file of files) {
        const image = {
          name: file.name,
          url: URL.createObjectURL(file),
          file: file,
        };
        const imageAlreadyUpload = tempImages.some(
          (item) => item.name === image.name
        );
        if (imageAlreadyUpload) continue;
        tempImages.push(image);
      }
      return tempImages;
    });
  };

  const removeImage = (e) => {
    const url = e.target.src;
    setImages((prev) => {
      return prev.filter((image) => image.url !== url);
    });
  };

  return (
    <>
      <h1 className="text-center py-2 text-3xl font-bold">Thêm sản phẩm</h1>
      <div className="mx-8">
        <hr />
      </div>
      <form
        className="w-full px-8 py-6 flex flex-col gap-4"
        onSubmit={onSubmit}>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
          <div className="grow">
            <LabelInput
              label="Tên sản phẩm"
              placeholder="Tên sản phẩm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={titleError}
              required={true}
            />
          </div>
          <div className="flex-none">
            <LabelInput
              label="Thời gian bảo hành (theo ngày)"
              placeholder="30"
              value={warrantyPeriodByDay}
              type="number"
              onChange={(e) => {
                const value = e.target.value;
                if (+value < 0)
                  setWarrantyPeriodByDayError(
                    'Thời gian bảo hành không thể bé hơn 0'
                  );
                else setWarrantyPeriodByDayError('');

                setWarrantyPeriodByDay(+value);
              }}
              error={warrantyPeriodByDayError}
              required={true}
            />
          </div>
          <div className="flex-none">
            <LabelInput
              label="Số lượng hàng trong kho"
              placeholder="30"
              value={availableQuantity}
              type="number"
              onChange={(e) => {
                let value = e.target.value;
                value = Number(value);
                if (value < 0)
                  setAvailableQuantityError(
                    'Số lượng hàng trong kho không thể bé hơn 0'
                  );
                else setAvailableQuantityError('');
                setAvailableQuantity(value);
              }}
              error={availableQuantityError}
              required={true}
            />
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <label htmlFor="" className="font-bold">
            Ảnh sản phẩm{' '}
            <span className="font-normal">
              (Di chuyển ảnh để sắp xếp thứ tự, click 2 lần liên tiếp vào ảnh để
              xóa. Ảnh đầu tiên sẽ được sử dụng làm ảnh chính)
            </span>
          </label>
          <input
            type="file"
            id="img"
            accept="image/*"
            multiple
            ref={imageSelectRef}
            onChange={onImagesSelect}
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
        <ImagesPreviewArea
          images={images}
          reorder={reorderImages}
          onDbClick={removeImage}
        />
        <div className="flex flex-col gap-5 md:flex-row md:gap-20">
          <div className="w-1/2">
            <LabelMultiSelectInput
              label="Danh mục"
              options={categoryOptions}
              onChange={(e) =>
                setCategories(e.map((category) => category.value))
              }
            />
            <ErrorLabel message={categoriesError} />
          </div>
          <div className="flex flex-col w-1/2">
            <LabelSelectInput
              label="Thương hiệu"
              options={brandOptions}
              onChange={(e) => setBrand(e.value)}
            />
            <ErrorLabel message={brandError} />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold">
            Chi tiết
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Chi tiết sản phẩm"
            className="input"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" className="font-bold mr-8">
            Giá sản phẩm
          </label>
          <NumberFormat
            className="input"
            thousandsGroupStyle="thousand"
            value={price}
            decimalSeparator="."
            suffix=" .VND"
            displayType="input"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
            onValueChange={onPriceChange}
          />
          <ErrorLabel message={priceError} />
        </div>
        <div>
          <label htmlFor="" className="font-bold mr-8">
            Giá khuyến mãi
          </label>
          <NumberFormat
            className="input"
            thousandsGroupStyle="thousand"
            value={discountPrice}
            decimalSeparator="."
            displayType="input"
            suffix=" .VND"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
            onValueChange={onDiscountPriceChange}
          />
          <ErrorLabel message={discountPriceError} />
        </div>

        <div className="flex items-center gap-6 w-1/2">
          <LabelSelectInput
            label="Trạng thái"
            options={stateOptions}
            onChange={(e) => setState(e.value)}
          />
          <ErrorLabel message={brandError} />
        </div>

        <div className="flex-center flex-col">
          {haveError() && <ErrorLabel message="Vui lòng nhập đủ nội dung" />}
          <PrimaryButton type="submit">Add product</PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
