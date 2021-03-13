import fetch from 'auth/FetchInterceptor'

const exampleService = {}

exampleService.getPost = function (params) {
  return fetch({
    url: '/posts/1',
    method: 'get',
    params
  })
}

exampleService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

exampleService.fetchData = function (data) {
	return fetch({
		url: '/login',
		method: 'post',
		headers: {
      'public-request': 'true'
    },
		body: JSON.stringify(data)
	})
}

export default exampleService