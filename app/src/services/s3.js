const AWS = require("aws-sdk");
const path = require("path");
const fs = require("fs");

class S3Service {
  constructor(options) {
    this.service = new AWS.S3({ ...options, s3ForcePathStyle: true });
    this.name = options.name;
  }

  async upload(filename) {
    const filepath = path.resolve("files", filename);
    const fileStream = fs.createReadStream(filepath);
    const uploadParams = {
      Bucket: this.name,
      Body: fileStream,
      Key: `${Date.now()}${filename}`
    };

    return this.service.upload(uploadParams).promise();
  }

  async listObjects() {
    return this.service
      .listObjects({
        Bucket: this.name
      })
      .promise();
  }
}

module.exports = S3Service;
