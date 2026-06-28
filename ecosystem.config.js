module.exports = {
  apps: [
    {
      name: "next-app-5511",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "1",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 5511
      }
    }
  ]
};
