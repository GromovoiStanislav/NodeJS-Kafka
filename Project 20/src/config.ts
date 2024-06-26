//import 'dotenv/config';

const ENV = (name: string, defaultValue: string | null = null): string => {
  const value = process.env[name];
  if (value && value.length > 0) {
    return value;
  }
  if (defaultValue) {
    return defaultValue;
  }

  throw new Error(`Environment variable ${name} is required!`);
};

export default {
  port: ENV('PORT', '8000'),
  kafka: {
    clientId: ENV('KAFKA_CLIENT_ID', 'ws-app'),
    brokers: ENV('KAFKA_BROKERS', 'localhost:9092')
      .replace(/\s/g, '')
      .split(','),
    username: ENV('KAFKA_USERNAME', ''),
    password: ENV('KAFKA_PASSWORD', ''),
    consumerGroupId: ENV('KAFKA_CONSUMER_GROUP_ID', 'ws-group'),
    topics: ENV('KAFKA_TOPICS', 'topic1').replace(/\s/g, '').split(','),
  },
};
