export const getInitials = (fullname) => {
  if (!fullname || typeof fullname !== 'string') {
    return '?';
  }

  const names = fullname.trim().split(' ');
  
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  return names
    .slice(0, 2)
    .map(name => name.charAt(0).toUpperCase())
    .join('');
};

export default getInitials;
