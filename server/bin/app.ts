import app from "@app/server";

async function main() {
  // Listen to requests
  app.listen(process.env.PORT, () =>
    console.log(`Listening on *:${process.env.PORT}`),
  );
}

main();
