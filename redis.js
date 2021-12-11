const redis = require("redis");

const client = redis.createClient({
  host: "redis-11175.c226.eu-west-1-3.ec2.cloud.redislabs.com",
  port: "11175",
  password: "n8JY3V7v5RgQUzigJMaDBiyOa87pCfIj",
  db: 0,
});

client.on("connect", () => console.log("Connected to Redis 🔫"));
client.on("ready", () =>
  console.log("Connected to Redis and ready to use... ♥️")
);
client.on("error", (err) => console.log(err.message));
client.on("end", () => console.log("Client disconnected from Redis"));

module.exports = client;
