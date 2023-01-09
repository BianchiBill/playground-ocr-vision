/* eslint-disable import/prefer-default-export */
import vision from '@google-cloud/vision';
import config from './config';

export const ocr = async () => {
  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Bucket where the file resides, e.g. my-bucket';
  // const fileName = 'Path to file within bucket, e.g. path/to/image.png';

  // Performs text detection on the gcs file
  // const [result] = await client.textDetection(`gs://${bucketName}/${fileName}`);
  // const [result] = await client.textDetection(
  //   `http://jeroen.github.io/images/testocr.png`
  // );
  const [result] = await client.textDetection(
    `https://courses.cs.vt.edu/csonline/AI/Lessons/VisualProcessing/OCRscans_files/robertson.jpg`
  );
  // console.log(`🚀 ~ file: ocr.js ~ line 20 ~ ocr ~ result`, result);
  const { locale, description } = result.textAnnotations[0];
  // console.log(`🚀 ~ file: ocr.js ~ line 21 ~ ocr ~ description`, description);
  // console.log(`🚀 ~ file: ocr.js ~ line 21 ~ ocr ~ locale`, locale);
  // console.log(
  //   `🚀 ~ file: ocr.js ~ line 20 ~ ocr ~ result`,
  //   ...result.textAnnotations
  // );

  // const detections = result.textAnnotations;
  // console.log('Text:', detections);
  // detections.forEach((text) => console.log(text.description));

  return {
    locale,
    description,
  };
};
