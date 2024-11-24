const headerStyles = {
  appBar: {
    backgroundColor: 'transparent', // Transparent background
    boxShadow: 'none', // Removes default shadow
    padding: '0.1rem 1.5rem',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '50px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0',
  },
  logoImage: {
    width: '50px',
    marginRight: '8px',
  },
  logoText: {
    color: '#00A86B',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  navLinksContainer: {
    display: { xs: 'none', md: 'flex' },
    gap: 2,
    alignItems: 'right',
  },
  activeLink: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
  link: {
    color: 'inherit',
    fontWeight: 'normal',
  },
  signUpButton: {
    display: { xs: 'none', md: 'inline-flex' },
    background: 'linear-gradient(90deg, #0057B7, #00A86B)',
    color: '#fff',
    borderRadius: '20px',
    padding: '4px 12px',
    fontWeight: 'bold',
    minWidth: '90px',
    marginRight: '0',
  },
  drawerButton: {
    width: '100%',
    background: 'linear-gradient(90deg, #0057B7, #00A86B)',
    color: '#fff',
    borderRadius: '20px',
    fontWeight: 'bold',
  },
};

export default headerStyles;
