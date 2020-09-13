// MOCK
const MOCKURL = 'http://www.wayliu.com/'
// 真实
const SERVERURL = 'http://localhost:3000/'

const URL = {
  getVarietyItem: MOCKURL + 'getVarietyItem',
  getHotProduct: MOCKURL + 'getHotProduct',
  registUser: SERVERURL + 'user/registUser'
}
console.log(SERVERURL)
console.log(URL)

export default URL
