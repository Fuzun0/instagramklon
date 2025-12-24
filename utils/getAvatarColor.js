export const getAvatarColor = (name) => {
  if (!name || typeof name !== 'string') {
    return '#6200EE';
  }

  // Simple hash function to generate consistent color for same name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash to hex color
  const color = Math.abs(hash).toString(16).substring(0, 6);
  const paddedColor = ('000000' + color).slice(-6);
  
  return `#${paddedColor}`;
};

export default getAvatarColor;
