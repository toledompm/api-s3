const S3Service = require('./services/s3');

module.exports = {
  bucket1: new S3Service({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_S3_ENDPOINT,
    name: process.env.AWS_S3_BUCKETNAME
  })
}
