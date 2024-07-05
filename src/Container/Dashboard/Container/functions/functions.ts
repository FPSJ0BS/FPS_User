export const TextInputValidEmployer = (inputValue: any) => {
    const regex = /^[A-Za-z\s]*$/; 
    return regex.test(inputValue);
  };
  