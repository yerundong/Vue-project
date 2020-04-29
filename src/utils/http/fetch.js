import axios from 'axios';
// console.log(axios);

// [axios.get]
// axios.get('1.js', {
//     params:{
//         a: 1
//     }
// }).then(r => {
//     console.log(r);
// });

// [axios.post]
// axios.post('1.js', {a: 1}).catch(e =>{
//     console.log(e);
// });

// [axios]
// axios({
//     method: 'get',
//     url: '1.js',
//     params:{
//         a:1
//     }
// }).then(r =>{
//     console.log(r);
// })

// axios({
//     method: 'post',
//     url: '1.js',
//     data:{
//         a:1
//     }
// }).then(r =>{
//     console.log(r);
// });

// [创建实例]
let $http = axios.create({
    baseURL: 'http/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        'token': '36469847131asdas46df'
    }
});

// console.log($http);

// $http({
//     method: 'get',
//     url: '1.js',
//     params:{
//         a:1
//     }
// })

// $http.get('1.js', {
//     params:{
//         a: 1
//     }
// }).then(r => {
//     console.log(r);
// });

// $http.post('1.js', {a: 1}).catch(e =>{
//     console.log(e);
// });

// 添加请求拦截器
$http.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // alert('请求之前');
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use(response => {
    // 对响应数据做点什么
    // alert('请求之后');
    // console.log(response);
    return response;
  }, function (error) {
    // 对响应错误做点什么
    // alert('请求之后');
    return Promise.reject(error);
  });

// $http({
//     method: 'get',
//     url: '1.js',
//     params:{
//         a:1
//     }
// });

// $http.post('1.js');