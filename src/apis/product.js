import auth from './auth';

const product = (() => {
  const uploadImages = (productId, images) => {
    const formData = new FormData();
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
    images,
  }) => {
    const response = await fetch('/api/admin/product', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: auth.getAuthorization(),
      },
      body: {
        title,
        detail,
        price,
        discountPrice,
        warrantyPeriodByDay,
        availableQuantity,
        state,
        brand,
        categories,
      },
    });

    const product = response.json();
    if (response.status === 200) {
      await uploadImages(
        product.id,
        images.map((image) => image.file)
      );
    }

    return response;
  };

  return { addProduct, uploadImages };
})();

export default product;
