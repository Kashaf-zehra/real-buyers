export const createMediaDataState = (
  propertyInformation,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const uploadedMediaData = {
    sellingData: propertyBuyingDetails,
    mediaData: propertyInformation.map((item) => ({ ...item, value: '' })),
  };
  return { uploadedMediaData };
};

export const handleFileChangeUtil = async (prevData, index, selectedFile) => {
  const isImage = (file) => file.type.startsWith('image/');
  const isVideo = (file) => file.type.startsWith('video/');
  const readFileAsURL = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });

  if (
    (prevData &&
      prevData.uploadedMediaData &&
      prevData.uploadedMediaData.sellingData &&
      index === 0 &&
      isImage(selectedFile)) ||
    (index === 1 && isVideo(selectedFile))
  ) {
    const fileUrl = await readFileAsURL(selectedFile);
    const fieldName = index === 0 ? 'uploadImage' : 'uploadVideo';

    console.log(`Selected ${fieldName} file URL:`, fileUrl);

    return {
      ...prevData,
      uploadedMediaData: {
        ...prevData.uploadedMediaData,
        sellingData: {
          ...prevData.uploadedMediaData.sellingData,
          [fieldName]: fileUrl,
        },
        mediaData: prevData.uploadedMediaData.mediaData.map((item, i) =>
          i === index ? { ...item, value: fileUrl } : item
        ),
      },
    };
  } else {
    alert('Please select a valid file type.');
    return prevData; // Return the unchanged data if the file type is invalid
  }
};
