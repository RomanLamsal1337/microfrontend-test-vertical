module.exports = {
    presets: [
        "babel-preset-njs",
        ['@babel/preset-typescript', {
            allowDeclareFields: true,
        }]
    ]
}
