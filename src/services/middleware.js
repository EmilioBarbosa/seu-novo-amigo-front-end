import Cookies from 'js-cookie';

export default {
  auth(to, from, next){
    const token = Cookies.get('sna_token');
    if (!token){
      next('login')
      return
    }
    next();

  },
}
