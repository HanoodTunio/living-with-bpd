/**
 * @file corsConfig
 */

const corsConfig = {
    origin: "*",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionSuccessStatus: 200
}

module.exports = corsConfig;