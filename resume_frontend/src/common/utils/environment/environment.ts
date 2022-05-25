const getConfig= ()=> {
    let environment = '';
    if(window.location.hostname.includes('local')){
        environment = 'development'
      }

      if(environment == 'development') {
        return  {
            SERVER_API_URL:'http://localhost:3000'
        }
    }
}
export default getConfig;
