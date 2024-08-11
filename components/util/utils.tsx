// Utility functions for filtering input values

// Format phone number
export const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/[^0-9]/g, '').slice(0, 11);
    const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join('-');
    }
    return value;
  };
  
  // Filter name input (allowing only specific characters)
  export const filterNameValue = (value: string): string => {
    return value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z\s]/g, '');
  };
  