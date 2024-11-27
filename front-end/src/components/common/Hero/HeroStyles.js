// src/components/HeroStyles.js
import heroBackground from "/src/assets/images/hero.png"; // Adjust path if needed


const heroStyles = {
  heroContainer: {
    position: 'relative',
    height: { xs: '400px', sm: '450px', md: '550px' },
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingLeft: { xs: '5px', md: '12px' },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      zIndex: 0,
    },
  },
  peopleImage: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    zIndex: 1,
    height: { xs: '25%', sm: '20%', md: '20%', lg: '20%' },
    width: 'auto',
    maxHeight: '90%',
    maxWidth: '45%',
    objectFit: 'contain',
    opacity: 0.9,
  },
  textContainer: {
    position: 'relative',
    zIndex: 2,
    color: '#333',
    textAlign: 'left',
    maxWidth: '500px',
    padding: 0,
    paddingLeft: { xs: '40px', sm: '60px', md: '80px' }, // Added padding to move text right
    marginLeft: { xs: '10px', sm: '20px', md: '30px' }, // Added margin for additional adjustment
    textShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  smallText: {
    fontWeight: '300',
    color: '#333',
    fontSize: { xs: '1rem', md: '1.1rem' },
    marginBottom: '5px',
  },
  mainText: {
    fontWeight: '700',
    fontSize: { xs: '1.75rem', md: '2.2rem' },
    marginTop: '5px',
    marginBottom: '5px',
  },
  subText: {
    fontWeight: '400',
    color: '#555',
    marginBottom: '20px',
    fontSize: { xs: '0.875rem', md: '1rem' },
  },
  joinButton: {
    background: 'linear-gradient(90deg, #0057B7, #00A86B)',
    color: '#fff',
    padding: { xs: '8px 20px', md: '10px 40px' },
    borderRadius: '25px',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: { xs: '0.875rem', md: '1rem' },
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
    marginTop: '80px',
    '&:hover': {
      background: 'linear-gradient(90deg, #0040a8, #009f5c)',
    },
  },
};

export default heroStyles;
