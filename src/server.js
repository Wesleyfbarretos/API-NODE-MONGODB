import { setup } from './app.js';

setup().then((app) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`
		**********************************************
		SERVER RUNNING ON PORT: http://localhost:${port}
		**********************************************
		`);
  });
});
