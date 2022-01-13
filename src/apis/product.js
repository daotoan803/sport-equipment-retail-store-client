import auth from './auth';
import axios from 'axios';

const product = (() => {
  const uploadImages = (productId, images) => {
    const formData = new FormData();
    formData.append('productId', productId);
    images.forEach((image) => {
      formData.append('images', image);
    });

    return axios.post(
      '/api/admin/product/images',
      formData,
      auth.getAxiosAuthorizationConfig
    );
  };

  const addProduct = async ({
    title,
    detail,
    price,
    discountPrice,
    warrantyPeriodByDay,
    availableQuantity,
    state,
    brand,
    categories,
  }) => {
    const { status, data } = await axios.post(
      '/api/admin/product',
      {
        title,
        detail,
        price,
        discountPrice,
        warrantyPeriodByDay,
        availableQuantity,
        state,
        brandId: brand,
        categories,
      },
      auth.getAxiosAuthorizationConfig
    );

    return { status, data };
  };

  return { addProduct, uploadImages };
})();

export default product;
