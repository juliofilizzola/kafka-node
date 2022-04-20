const loadConsumer = ({ log, message }: any): void => {
  console.log(log);
  const result = Buffer.from(message.key, 'base64').toString('ascii');
  console.log(result);
};

export default loadConsumer;
