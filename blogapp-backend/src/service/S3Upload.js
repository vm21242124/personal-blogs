const s3client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: `${process.env.ACCESSKEY}`,
      secretAccessKey: `${process.env.SECRETACCESSKEY}`,
    }
  });

  const command = new PutObjectCommand({
    Bucket: "netlifyvm",
    Key: `__output`,
    Body: fs.createReadStream(filePath),
    ContentType: mime.lookup(filePath),
  });