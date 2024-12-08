const UserHeaderStyles = {
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginTop: 2,
    padding: '0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '60px',
  },
  logoNavContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '70px',
    marginRight: '12px',
  },
  logoText: {
    color: '#00A86B',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  profileIcon: {
    color: 'inherit',
    fontSize: '3rem',
  },
  navLinksContainer: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
  },
  activeLink: {
    color: '#00A86B',
    fontWeight: 'bold',
  },
  link: {
    color: 'inherit',
    fontWeight: 'normal',
  },
  drawerButton: {
    width: '100%',
    background: 'linear-gradient(90deg, #0057B7, #00A86B)',
    color: '#fff',
    borderRadius: '20px',
    fontWeight: 'bold',
  },
};

export default UserHeaderStyles;
