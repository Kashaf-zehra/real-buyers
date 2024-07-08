export function handleButtonClick(
  index,
  iconTitle,
  plotType,
  commercialType,
  prevData
) {
  const selectedText = iconTitle[index]?.title;
  const selectedText2 = plotType[index]?.title;
  const selectedText3 = commercialType[index]?.title;

  // setActivePropertyType(selectedText);
  const updatedPurposeData = [...prevData.propertyTypeInfo.propertyTypeData];
  (updatedPurposeData[index].value = selectedText),
    selectedText2,
    selectedText3;
  const updatedSellingData = {
    ...prevData.propertyTypeInfo.sellingData,
    SelectPropertyType: {
      ...prevData.propertyTypeInfo.sellingData.SelectPropertyType,
      House: {
        ...prevData.propertyTypeInfo.sellingData.SelectPropertyType.House,
        [iconTitle[index]?.label]: selectedText,
      },
      Plot: {
        ...prevData.propertyTypeInfo.sellingData.SelectPropertyType.Plot,
        [plotType[index]?.label]: selectedText2,
      },
      Commercial: {
        ...prevData.propertyTypeInfo.sellingData.SelectPropertyType.Commercial,
        [commercialType[index]?.label]: selectedText3,
      },
    },
  };
  if (selectedText === 'Rent House') {
    updatedSellingData.SelectPropertyType = {
      ...prevData.propertyTypeInfo.sellingData.SelectPropertyType,
      rentBtn: selectedText,
    };
  }
  return {
    ...prevData,
    propertyTypeInfo: {
      sellingData: updatedSellingData,
      propertyTypeData: updatedPurposeData,
    },
  };
}
