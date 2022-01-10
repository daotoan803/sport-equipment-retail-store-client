import auth from './auth';

const product = (() => {
  const uploadImages = (productId, images) => {
    const formData = new FormData();
    formData.append('productId', productId);
    images.forEach((image) => {
      formData.append('images', image);
    });

    return fetch('/api/admin/product/images', {
      method: 'POST',
      headers: {
        Authorization: auth.getAuthorization(),
      },
      body: formData,
    });
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
    const response = await fetch('/api/admin/product', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: auth.getAuthorization(),
      },
      body: JSON.stringify({
        title,
        detail,
        price,
        discountPrice,
        warrantyPeriodByDay,
        availableQuantity,
        state,
        brandId: brand,
        categories,
      }),
    });

    const data = await response.json();
    return { status: response.status, data };
  };

  return { addProduct, uploadImages };
})();

export default product;
