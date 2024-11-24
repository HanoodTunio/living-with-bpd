// src/components/BlogCard/BlogStyles.js

const blogStyles = {
    card: {
      maxWidth: 320,
      height: 350, // Fixed height for equal card size
      borderRadius: '16px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      },
    },
    media: {
      height: '180px',
      objectFit: 'cover',
    },
    content: {
      padding: '16px',
      flex: '1 0 auto',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1rem',
      marginBottom: '8px',
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    author: {
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '0.875rem',
    },
    date: {
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '0.875rem',
    },
    description: {
      color: 'rgba(0, 0, 0, 0.8)',
      fontSize: '0.9rem',
      marginBottom: '12px',
      display: '-webkit-box', // Enable flex-like behavior
      WebkitLineClamp: 2, // Limit to 2 lines
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis', // Adds "..."
    },
    link: {
      fontWeight: 'bold',
      color: '#0057B7',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
  
  export default blogStyles;
  