// Simulated API for fetching images
const fetchImages = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Sample data
  const images = [
    {
      id: 1,
      author: {
        fullname: 'John Doe',
        initials: 'JD',
        backgroundColor: '#FF6B6B',
      },
      image: 'https://picsum.photos/600/600?random=1',
    },
    {
      id: 2,
      author: {
        fullname: 'Jane Smith',
        initials: 'JS',
        backgroundColor: '#4ECDC4',
      },
      image: 'https://picsum.photos/600/600?random=2',
    },
    {
      id: 3,
      author: {
        fullname: 'Mike Johnson',
        initials: 'MJ',
        backgroundColor: '#95E1D3',
      },
      image: 'https://picsum.photos/600/600?random=3',
    },
    {
      id: 4,
      author: {
        fullname: 'Sarah Wilson',
        initials: 'SW',
        backgroundColor: '#F38181',
      },
      image: 'https://picsum.photos/600/600?random=4',
    },
    {
      id: 5,
      author: {
        fullname: 'Tom Brown',
        initials: 'TB',
        backgroundColor: '#AA96DA',
      },
      image: 'https://picsum.photos/600/600?random=5',
    },
  ];

  return images;
};

export default fetchImages;
