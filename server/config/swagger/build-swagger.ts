/* eslint-disable no-console */
import { promises as fs } from 'fs';
import swaggerDefinition from './swagger-def';

generateSwaggerSpec();

/** Configures the Swagger specs */
async function generateSwaggerSpec(): Promise<void> {
	try {
		// we want to save the swagger spec to a file so the generator can use this to create the client side apis
		await fs.writeFile(`${process.cwd()}/swagger-api-spec.json`, JSON.stringify(swaggerDefinition));
	} catch (err) {
		console.error(err);
	}
}

export default null;
