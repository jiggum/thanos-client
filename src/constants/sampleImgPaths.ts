class SampleImgPaths {
  input: string

  background: string

  person1: string

  person2: string

  constructor(input: string, background: string, person1: string, person2 = '') {
    this.input = input
    this.background = background
    this.person1 = person1
    this.person2 = person2
  }
}

export default [
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample1-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample1-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample1-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample2-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample2-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample2-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample3-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample3-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample3-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample4-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample4-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample4-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample5-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample5-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample5-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample6-input.jpeg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample6-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample6-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample7-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample7-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample7-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample8-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample8-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample8-persons1.png',
  ),
  new SampleImgPaths(
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample9-input.jpg',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample9-background.png',
    'https://d23jzln6ucpirz.cloudfront.net/samples/sample9-persons1.png',
  ),
]
