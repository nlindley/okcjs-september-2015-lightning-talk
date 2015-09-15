console.error('This demo is non-functional. You will need to provide parameters for AWS and add aws-sdk to package.json.');
process.exit(1);

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

function requestHandler(request, reply) {
  var AWS = require('aws-sdk');
  var s3 = new AWS.S3();

  function requestHandler(request, response) {
    var params = {} // Bucket, key, etc.
    var downloadStream = s3.getObject(params).createReadStream();
    downloadStream.pipe(response);
  }
}
